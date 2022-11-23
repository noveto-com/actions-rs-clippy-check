import { input } from "@actions-rs/core";
import stringArgv from "string-argv";

// Parsed action input
export interface Input {
    toolchain?: string;
    args: string[];
    useCross: boolean;
    workingDirectory?: string;
}

export function get(): Input {
    let toolchain = input.getInput("toolchain");

    if (toolchain.startsWith("+")) {
        toolchain = toolchain.slice(1);
    }
    const useCross = input.getInputBool("use-cross");
    const workingDirectory = input.getInput("working-directory");

    return {
        args: stringArgv(input.getInput("args")),
        useCross,
        toolchain: toolchain || undefined,
        workingDirectory: workingDirectory || undefined,
    };
}
