
interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: string;
    }[]
}

enum ReportType {
     EXPENSE = "expense",
     INCOME = "income"
}


export const data: Data  = {
    report: [
        {
            id: "uuid1",
            source: "Salary",
            amount: 7500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid2",
            source: "Youtube",
            amount: 2500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid3",
            source: "Food",
            amount: 7500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        }
    ]  
}

// data.report.push("asdasdas")

// data.report.push(5464645)

// data.report.push(true)

// data.report.push({
//     id: "uuid1",
//     source: "Salary",
//     amount: 7500,
//     created_at: new Date(),
//     updated_at: new Date(),
//     type: ReportType.INCOME
// })