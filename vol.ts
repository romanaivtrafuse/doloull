class Employee {
    private _bonus: number;

    constructor(initialBonus: number) {
        this._bonus = initialBonus;
    }

    public get bonus(): number {
        return this._bonus;
    }

    public set bonus(newBonus: number) {
        if (newBonus >= 0) {
            this._bonus = newBonus;
        } else {
            throw new Error('Bonus cannot be negative.');
        }
    }

    public addBonus(additionalBonus: number): void {
        if (additionalBonus > 0) {
            this._bonus += additionalBonus;
        } else {
            throw new Error('Additional bonus must be positive.');
        }
    }
}

// Usage
const employee = new Employee(1000);
employee.bonus = 1500; // Setter will validate and set the new bonus
console.log(employee.bonus); // Getter will return the current bonus
employee.addBonus(500); // Method to add additional bonus
