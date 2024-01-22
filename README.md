# Diagram

## Here are the model diagrams

### User

| Field      | Type      | Attributes                         |
|------------|-----------|------------------------------------|
| id         | Int       | @id @default(autoincrement())      |
| email      | String    | @unique                            |
| username   | String?   | @unique @db.VarChar(10)            |
| profile    | Profile?  |                                    |
| posts      | Post[]    |                                    |
| comments   | Comment[] |                                    |
| createdAt  | DateTime  | @default(now())                    |
| updatedAt  | DateTime  | @updatedAt                         |

### Profile

| Field             | Type     | Attributes                                      |
|-------------------|----------|-------------------------------------------------|
| id                | Int      | @id @default(autoincrement())                   |
| createdAt         | DateTime | @default(now())                                 |
| updatedAt         | DateTime | @updatedAt                                      |
| profilePictureUrl | String?  |                                                 |
| bio               | String?  | @db.VarChar(120)                                |
| userId            | Int      | @unique                                         |
| user              | User     | @relation(fields: [userId], references: [id])   |


### Post

| Field      | Type     | Attributes                                      |
|------------|----------|-------------------------------------------------|
| id         | Int      | @id @default(autoincrement())                   |
| createdAt  | DateTime | @default(now())                                 |
| updatedAt  | DateTime | @updatedAt                                      |
| title      | String   | @db.VarChar(150)                                |
| content    | String   | @db.VarChar(150)                                |
| published  | Boolean  | @default(true)                                  |
| pictureUrl | String?  |                                                 |
| authorId   | Int      |                                                 |
| author     | User     | @relation(fields: [authorId], references: [id]) |
| comments   | Comment[]|                                                 |

### Comment

| Field     | Type     | Attributes                                      |
|-----------|----------|-------------------------------------------------|
| id        | Int      | @id @default(autoincrement())                   |
| text      | String   | @db.VarChar(250)                                |
| postId    | Int      |                                                 |
| post      | Post     | @relation(fields: [postId], references: [id])   |
| authorId  | Int      |                                                 |
| author    | User     | @relation(fields: [authorId], references: [id]) |
| createdAt | DateTime | @default(now())                                 |
| updatedAt | DateTime | @updatedAt                                      |
