# Entity-Relationship Diagram for Prisma Schema

## Models

### User
- `id` Int (Primary Key, Auto Increment)
- `email` String (Unique)
- `username` String (Unique, Max 10 chars)
- `createdAt` DateTime
- `updatedAt` DateTime
- Relationships:
  - Profile (0..1)
  - Posts (1 to many)
  - Comments (1 to many)

### Profile
- `id` Int (Primary Key, Auto Increment)
- `createdAt` DateTime
- `updatedAt` DateTime
- `profilePic` String
- `bio` String (Max 120 chars)
- `userId` Int (Unique, Foreign Key referencing User)
- Relationships:
  - User (1 to 1)

### Post
- `id` Int (Primary Key, Auto Increment)
- `title` String (Max 150 chars)
- `content` String (Max 150 chars)
- `authorId` Int (Foreign Key referencing User)
- `postPic` String
- `createdAt` DateTime
- `updatedAt` DateTime
- `publish` Boolean
- Relationships:
  - Comments (1 to many)

### Comment
- `id` Int (Primary Key, Auto Increment)
- `text` String (Max 250 chars)
- `postId` Int (Foreign Key referencing Post)
- `authorId` Int (Foreign Key referencing User)
- `createdAt` DateTime
- `updatedAt` DateTime

## Relationships

