--
-- PostgreSQL database dump
--

\restrict VGO4xALqFsM8lkDD9RQZmhwhcmzTPT92ebfEjgpD5TIvLLEJg9HbGBeBaIPGkKk

-- Dumped from database version 16.12 (Homebrew)
-- Dumped by pg_dump version 16.12 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: mohammedtousif
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO mohammedtousif;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: mohammedtousif
--

CREATE TABLE public.posts (
    id text NOT NULL,
    commit_message text NOT NULL,
    commit_id text,
    commit_url text,
    author_name text,
    author_email text,
    repository character varying(255),
    commit_type character varying(50),
    linkedin_post text,
    twitter_post text,
    instagram_post text,
    hashtags text[],
    generated_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    is_published boolean DEFAULT false NOT NULL,
    platform_published text[],
    user_id text
);


ALTER TABLE public.posts OWNER TO mohammedtousif;

--
-- Name: users; Type: TABLE; Schema: public; Owner: mohammedtousif
--

CREATE TABLE public.users (
    id text NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    github_id text,
    avatar text,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL
);


ALTER TABLE public.users OWNER TO mohammedtousif;

--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: mohammedtousif
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
725944ad-30a2-4351-8fc0-8e08a11b47c0	bbb1983235176d1a8ba5c3d53fec336abd870a28437b60b660e64e6862dea11f	2026-02-23 01:01:14.757743+05:30	20260222193114_init	\N	\N	2026-02-23 01:01:14.752361+05:30	1
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: mohammedtousif
--

COPY public.posts (id, commit_message, commit_id, commit_url, author_name, author_email, repository, commit_type, linkedin_post, twitter_post, instagram_post, hashtags, generated_at, created_at, is_published, platform_published, user_id) FROM stdin;
df236161-a40a-4fd9-aaf9-61bfba6d7de0	test: verify update and publish endpoints	abc123	https://github.com/test/repo/commit/abc123	Test User	test@example.com	test/repo	manual	Updated LinkedIn post with better content	Updated Twitter post - more engaging	Updated Instagram caption - more visual	{#test,#devsync,#updated}	2026-04-01 05:50:38.555	2026-04-01 05:50:38.555	t	{linkedin,twitter}	\N
31eb86c3-c7fd-4616-9f81-3b168756ce7b	hi my name is tousif  and im a fullstack dev	1775027195331		Manual Entry	\N		manual	🚀 Just shipped: hi my name is tousif  and im a fullstack dev	🚀 hi my name is tousif  and im a fullstack dev\n\n#GitHub #DevCommunity	🚀 New update! hi my name is tousif  and im a fullstack dev	{#GitHub,#DevLife,#Coding,#Tech,#Developer}	2026-04-01 07:06:35.36	2026-04-01 07:06:35.36	t	{linkedin,twitter,instagram}	\N
75c8bd63-4a4a-4953-b861-e6d312828031	feat: add user authentication system with OAuth 2.0	1775038109208	https://github.com/user/repo/commit/abc123	John Doe	\N	https://github.com/user/repo	manual	🚀 Just shipped: feat: add user authentication system with OAuth 2.0	🚀 feat: add user authentication system with OAuth 2.0\n\n#GitHub #DevCommunity	🚀 New update! feat: add user authentication system with OAuth 2.0	{#GitHub,#DevLife,#Coding,#Tech,#Developer}	2026-04-01 10:08:29.235	2026-04-01 10:08:29.235	t	{linkedin,twitter,instagram}	\N
17086082-771c-415f-8c2d-cd12972d401e	fix: resolve memory leak in websocket connection	1775044915639	https://github.com/user/repo/commit/def456	Jane Smith	\N	https://github.com/user/repo	manual	🚀 Just shipped: fix: resolve memory leak in websocket connection	🚀 fix: resolve memory leak in websocket connection\n\n#GitHub #DevCommunity	🚀 New update! fix: resolve memory leak in websocket connection	{#GitHub,#DevLife,#Coding,#Tech,#Developer}	2026-04-01 12:01:55.716	2026-04-01 12:01:55.716	t	{linkedin,twitter,instagram}	\N
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: mohammedtousif
--

COPY public.users (id, name, email, password, github_id, avatar, created_at, updated_at) FROM stdin;
141b2321-5069-4ee1-8a18-45e5d0dac788	Tousif	tousif.cse@gmail.com	$2b$10$bPO2kElNTBZvMNp5uPLyZe675vEMZnQ854IukY2nJMiTtkPqZIqVm	\N	\N	2026-04-01 12:43:52.932	2026-04-01 12:43:52.932
5e537c8f-f516-4c7e-a545-ef4dbd256d1f	Ateef	Ateef@gmail.com	$2b$10$bIWWx.gHyfrJfK90383cye8U740bUY0K0fHw.n6VtrLreGld40l.u	\N	\N	2026-04-03 05:42:19.468	2026-04-03 05:42:19.468
7e0cacd5-e453-49f6-9b5a-4ec02bd64488	Fresh Test	fresh@example.com	$2b$10$zoh8QNznHfH2/pbUeI4ZHe.9r9RXJUW/zKxjudr5sKM44bTQziqS2	\N	\N	2026-04-03 05:56:32.081	2026-04-03 05:56:32.081
10ff51f8-7120-48e2-bb08-1e41c24f3196	Sohail	Sohail@gmail.com	$2b$10$gZpJEITnagjsfJlz9NU/NOmRr4w/o17xIWsYWe06tRqfOSnOfzgTa	\N	\N	2026-04-03 06:03:38.84	2026-04-03 06:03:38.84
b054e772-0c54-45b5-82d0-7d231f8b45a1	Test Debug 	testdebug@example.com	$2b$10$ULyQ0Sr95Lr3IHb225gvwOPwsyiXAnXCPRnZFLmrc7d0iDIM/d1tS	\N	\N	2026-04-03 06:15:08.533	2026-04-03 06:15:08.533
77ffba3b-de01-4a6e-9eda-a4c918da6c63	Test User Updated	test@example.com	$2b$10$JMMwMvtjCv8GnhfLMZ6IXOjjC9Di5uDtkNVKnfhnfD7vNVm2gGdxu	\N	https://example.com/avatar.jpg	2026-04-01 12:31:37.818	2026-04-03 06:36:13.248
\.


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: mohammedtousif
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: mohammedtousif
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: mohammedtousif
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: mohammedtousif
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- Name: users_github_id_key; Type: INDEX; Schema: public; Owner: mohammedtousif
--

CREATE UNIQUE INDEX users_github_id_key ON public.users USING btree (github_id);


--
-- PostgreSQL database dump complete
--

\unrestrict VGO4xALqFsM8lkDD9RQZmhwhcmzTPT92ebfEjgpD5TIvLLEJg9HbGBeBaIPGkKk

