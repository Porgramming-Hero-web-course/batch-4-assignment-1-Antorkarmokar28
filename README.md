Blog-1

I am writing an impactful blog posts of the significance of union and intersection types in Typescript.

1.Union: Unions are basically expressed by the | symbol. Union means that a variable will take one value out of multiple values.This || symbol use in javascript and this | symbol use in typescript but two symbol work is same.

example: 
(1) type Person = {
        id: number | string;
        name: string;
        age: number;
    }
(2) type FrontendSkill1 = {
        html: boolean;
        css: boolean;
        javascript: boolean;
        react: boolean
    }
    type FrontendSkill2 = {
        html: boolean;
        css: boolean;
        javascript: boolean;
        react: boolean;
        nextjs: boolean;
        redux: boolean;
    }
    type FrontendSkillTest = FrontendSkill1 | FrontendSkill2;

2.Intersection: Intersection are basically expressed by the & symbol. Intersection means that a variable will take all value out of multiple values. This && symbol use in javascript and this & symbol use in typescript but two symbol work is same. 
Example: 
(1) type FullstackSkill1 = {
        html: boolean;
        css: boolean;
        javascript: boolean;
        react: boolean;
    }
    type FullstackSkill1 = {
        node: boolean;
        express: boolean;
        mongodb: boolean;
        prisma: boolean
    }
    type FullstackSkillTest = FrontendSkill1 & FrontendSkill2;

In TypeScript, the & symbol is used to define intersection types, which combine multiple types into one, whereas in JavaScript, the && symbol is used as a logical AND operator to evaluate boolean expressions.