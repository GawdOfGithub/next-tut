"use client"

import { z } from "zod";

const formSchema = z.object({
    questionTitle: z.string().min(1, {
      message: "You cannot leave the question empty.",
    }),
    explanation:z.string().min(10),
    tags:z.array(z.string().min(1).max(15).min(1).max(10))
    
  })
export default formSchema