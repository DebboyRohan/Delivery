export {};

// Create a type for the roles
export type Roles = "admin" | "sales" | "treasurer" | "delivery";

declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles;
    };
  }
}
