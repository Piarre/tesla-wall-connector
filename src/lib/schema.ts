import z from "zod";

const ipSchema: z.ZodString = z.string().refine(
    (ip) => {
        try {
            z.ipv4().parse(ip);
            return true;
        } catch {
            return false;
        }
    },
    {
        message: "Invalid IPv4 address",
    },
);

export { ipSchema };
