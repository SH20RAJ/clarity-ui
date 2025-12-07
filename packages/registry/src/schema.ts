import { z } from "zod";

export const registryItemSchema = z.object({
    name: z.string(),
    type: z.enum(["registry:ui", "registry:hook", "registry:lib"]),
    description: z.string().optional(),
    dependencies: z.array(z.string()).optional(),
    registryDependencies: z.array(z.string()).optional(),
    roles: z.array(z.string()).optional(),
    files: z.array(
        z.object({
            path: z.string(),
            type: z.string(),
            target: z.string().optional(), // Where it should be installed in the user's project relative to their alias
        })
    ),
    meta: z.record(z.any()).optional(),
});

export type RegistryItem = z.infer<typeof registryItemSchema>;
export type Registry = RegistryItem[];
