const program=require('commander');
const {prompt}=require('inquirer')


program.version('2.20.0');
program.description("Git Like system")

const question=[
    {
        type:"input",
        name:"firstname",
        message:"Enter the fisrt name"
    },
    {
        type:"input",
        name:"lastname",
        message:"Enter the last name"
    }
]

program
    .command('new')
    .alias('a')
    .description('new user')
    .action(async()=>{
        const answer=await prompt(question);
        console.log(answer);
    })

program.command('add <firstname> <lastname>')
.alias('a')
.description('adding a user')
.action((firstname,lastname)=>{
    console.log(__dirname);
    console.log(firstname);
    console.error(lastname);
})

setInterval(()=>{console.log("abhi")},1000)

program.parse(process.argv);
