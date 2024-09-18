
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
};

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {
        ...assign,
        ...propsToUpdate
    };
};

// const assignVerified: Readonly<Assignment> = {};

let hexColor: Record<string, string> = {
    red: 'FF000',
    green: '00FF00',
    blue: '0000F'
};

const newColor = hexColor = { orange: 'EA110'}
console.log(newColor);