interface User {
    id?:string,
    name:string,
    email: string,
}


//BackEnd
async function deleteUser(id?:string) {
    // console.log(id);
    await fetch('http://localhost:3000/users/'+id,{
        method: "DELETE"
    });
    refressTable();
}

async function updateUser(data:User) {
    console.log(data);
    
    await fetch('http://localhost:3000/users/'+data.id,{
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    refressTable();
}