// The elf programmers are creating a small magical assembler to control the machines in Santa Claus's workshop.
//
// To assist them, we will implement a simple interpreter that supports the following magical instructions:
//
//     MOV x y: Copies the value x (which can be a number or the content of a register) into register y
// INC x: Increments the content of register x by 1
// DEC x: Decrements the content of register x by 1
// JMP x y: If the value in register x is 0, then jumps to the instruction at index y and continues executing the program from there.
//     Expected behavior:
//     If an attempt is made to access, increment, or decrement a register that has not been initialized, the default value 0 will be used.
//     The jump with JMP is absolute and goes to the exact index indicated by y.
//     Upon completion, the program should return the content of register A. If A did not have a defined value, it returns undefined.
//     const instructions = [
//     'MOV -1 C', // copies -1 to register 'C',
//     'INC C', // increments the value of register 'C'
//     'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
//     'MOV C A', // copies register 'C' to register 'A',
//     'INC A' // increments the value of register 'A'
// ]
//
// compile(instructions) // -> 2
//
// /**
//  Step-by-step execution:
//  0: MOV -1 C -> The register C receives the value -1
//  1: INC C    -> The register C becomes 0
//  2: JMP C 1  -> C is 0, jumps to the instruction at index 1
//  1: INC C    -> The register C becomes 1
//  2: JMP C 1  -> C is 1, the instruction is ignored
//  3: MOV C A  -> Copies register C to A. Now A is 1
//  4: INC A    -> The register A becomes 2
//  */
// Note: Registers that have not been previously initialized are initialized to 0.

function compile(instructions) {
    const registers = {}; // Initialize the registers

    const getValue = (x) => {
        if (isNaN(x)) { // If x is a register
            return registers[x] !== undefined ? registers[x] : 0;
        }
        return parseInt(x); // If x is a number
    };

    let i = 0; // Instruction pointer
    console.log(instructions.length)
    while (i < instructions.length) {
        const [cmd, arg1, arg2] = instructions[i].split(' ');
        console.log('---')
        console.log(registers)
        console.log(instructions[i].split(' '))
        console.log(cmd, arg1, arg2)

        switch (cmd) {
            case 'MOV':
                registers[arg2] = getValue(arg1);
                i++;
                break;
            case 'INC':
                registers[arg1] = getValue(arg1) + 1;
                i++;
                break;
            case 'DEC':
                registers[arg1] = getValue(arg1) - 1;
                i++;
                break;
            case 'JMP':
                if (getValue(arg1) === 0) {
                    i = parseInt(arg2);
                } else {
                    i++;
                }
                break;
            default:
                throw new Error(`Unknown command: ${cmd}`);
        }
    }

    console.log('registers', registers)
    return registers.hasOwnProperty('A') ? registers['A'] : undefined;
}

// Example usage
const instructions = [
    'MOV -1 C', // copies -1 to register 'C',
    'INC C', // increments the value of register 'C'
    'JMP C 1', // jumps to the instruction at index 1 if 'C' is 0
    'MOV C A', // copies register 'C' to register 'A',
    'INC A' // increments the value of register 'A'
];

console.log(compile(instructions)); // -> 2
// MOV x y: Copies the value x (which can be a number or the content of a register) into register y
// INC x: Increments the content of register x by 1
// DEC x: Decrements the content of register x by 1
// JMP x y: If the value in register x is 0, then jumps to the instruction at index y and continues executing the program from there.
//     Expected behavior:
//     If an attempt is made to access, increment, or decrement a register that has not been initialized, the default value 0 will be used.
//     The jump with JMP is absolute and goes to the exact index indicated by y.
//     Upon completion, the program should return the content of register A. If A did not have a defined value, it returns undefined.
