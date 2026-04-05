import { hashPassword, comparePassword, generateToken } from '../services/authService.js';
import { prisma } from '../services/postService.js';

/**
 * User signup
 */
export async function signup(req, res) {
  try {
    const { name, email, password } = req.body;

    console.log('📝 Signup request:', { name, email, passwordLength: password?.length });

    // Validation
    if (!name || !email || !password) {
      console.log('❌ Missing fields');
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    if (password.length < 6) {
      console.log('❌ Password too short');
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log('❌ User already exists:', email);
      return res.status(409).json({ error: 'User with this email already exists' });
    }

    // Hash password
    const hashedPassword = await hashPassword(password);
    console.log('🔐 Password hashed (first 20 chars):', hashedPassword.substring(0, 20) + '...');

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    console.log('✅ User created:', user.name, user.email, user.id);

    // Generate token
    const token = generateToken(user);

    // Return success response (without password)
    const { password: _, ...userWithoutPassword } = user;
    delete userWithoutPassword.password;

    res.status(201).json({
      success: true,
      data: userWithoutPassword,
      token,
      message: 'Account created successfully',
    });
  } catch (error) {
    console.error('❌ Signup error:', error.message);
    res.status(500).json({ error: 'Failed to create account' });
  }
}

/**
 * User login
 */
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    console.log('🔑 Login request:', { email, passwordLength: password?.length });

    // Validation
    if (!email || !password) {
      console.log('❌ Missing login fields');
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.log('❌ User not found:', email);
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    console.log('👤 User found:', user.name, 'checking password...');

    // Verify password
    const isPasswordValid = await comparePassword(password, user.password);

    console.log('🔐 Password valid:', isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate token
    const token = generateToken(user);

    console.log('✅ Login successful for:', user.email);

    // Return success response (without password)
    const { password: _, ...userWithoutPassword } = user;
    delete userWithoutPassword.password;

    res.json({
      success: true,
      data: userWithoutPassword,
      token,
      message: 'Login successful',
    });
  } catch (error) {
    console.error('❌ Login error:', error.message);
    res.status(500).json({ error: 'Failed to login' });
  }
}

/**
 * Get current user (protected route)
 */
export async function getCurrentUser(req, res) {
  try {
    // User should be attached by auth middleware
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Get fresh user data
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        githubId: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error('❌ Get user error:', error.message);
    res.status(500).json({ error: 'Failed to get user' });
  }
}

/**
 * Update user profile
 */
export async function updateProfile(req, res) {
  try {
    // User should be attached by auth middleware
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { name, avatar } = req.body;

    console.log('📝 Update profile request:', { userId: req.user.userId, name, avatar });

    // Update user
    const user = await prisma.user.update({
      where: { id: req.user.userId },
      data: {
        ...(name && { name }),
        ...(avatar !== undefined && { avatar }),
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        githubId: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    console.log('✅ Profile updated:', user.name);

    res.json({
      success: true,
      data: user,
      message: 'Profile updated successfully',
    });
  } catch (error) {
    console.error('❌ Update profile error:', error.message);
    res.status(500).json({ error: 'Failed to update profile' });
  }
}
