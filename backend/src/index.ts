import express from "express";
import cuid from "cuid";
import { Prisma, PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();
const app= express();

app.use(cors());
app.use(express.json());

app.post("/employees",async (req,res)=> {
    try {
        const emplyDetails = await prisma.employeeDetails.create({
            data:{
                    name:  req.body.name,
                    email: req.body.email,
                    designation: req.body.designation,
                    phone: req.body.phone,
                    place:  req.body.place,
                    address : req.body.address,
            }
        })
        res.status(201).json({message: "Successful addition", employeeDetails: emplyDetails})

    } catch (error) {
        
    }
})

app.get("/employees",async (req,res)=> {
    try {
        const emplyDetails = await prisma.employeeDetails.findMany( )
        res.status(201).json({message: "Successful Retrival",emplyDetails})

    } catch (error) {
        
    }
})

app.put("/employees/:empId",async (req,res)=>{
    const empId = req.params.empId;
    const empCount = await prisma.employeeDetails.count({
    where:{
        empId
    }
})

if(empCount===0){
res.status(404).json({message: "user not found"})
}

const emplyDetails = await prisma.employeeDetails.update({
    where:{
        empId,
    },
    data: {
        name:req.body.name,
        email:req.body.email,
        designation: req.body.designation,
        phone:req.body.phone,
        place: req.body.place,
        address: req.body.address,
    },
})
res.json({message: "Employee updated", employeeDetails: emplyDetails})
})

app.delete("/employees/:empId",async (req,res)=>{
    const empId = req.params.empId;
    await prisma.employeeDetails.delete({
        where:{
            empId,
        },
    })
    res.status(201).json({message:'Successfully Deleted'});})

app.listen(12345, ()=>{console.log("server started on port 54321")})