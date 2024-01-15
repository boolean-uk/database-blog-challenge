### Entities and Attributes


### User

- **Attributes:**
  - id (PK, int, autoincrement)
  - email (Unique, String)
  - username (Unique, Nullable, VarChar(10))
  - createdAt (DateTime)
  - updatedAt (DateTime)
  
- **Relationships:**
  - One-to-One with Profile
  - One-to-Many with Post (as author)
  - One-to-Many with Comment (as author)

#### Profile

- **Attributes:**
  - id (PK, int, autoincrement)
  - createdAt (DateTime)
  - updatedAt (DateTime)
  - profilePictureUrl (Nullable, String)
  - bio (Nullable, VarChar(120))
  - userId (FK, int, Unique)

- **Relationships:**
  - One-to-One with User (via userId)

#### Post

- **Attributes:**
  - id (PK, int, autoincrement)
  - createdAt (DateTime)
  - updatedAt (DateTime)
  - title (VarChar(150))
  - content (VarChar(150))
  - published (Boolean, default true)
  - pictureUrl (Nullable, String)
  - authorId (FK, int)

- **Relationships:**
  - Many-to-One with User (via authorId)
  - One-to-Many with Comment

#### Comment

- **Attributes:**
  - id (PK, int, autoincrement)
  - text (VarChar(250))
  - postId (FK, int)
  - authorId (FK, int)
  - createdAt (DateTime)
  - updatedAt (DateTime)

- **Relationships:**
  - Many-to-One with User (via authorId)
  - Many-to-One with Post (via postId)

**Note:**
- PK: Primary Key
- FK: Foreign Key
- int: Integer
- String: Text/String type