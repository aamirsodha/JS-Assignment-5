//Q1

// var arr1 = [[0,1],[1,2],[2,3]]


//Q2

// var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(arr.join("</br>"))


//Q3

// for(var i = 1; i <= 10; i++)
// {
//     document.write(i+"</br>")
// }

//Q4

// var tabNum = +prompt("Enter a number to get it's multiplication table")
// var tabLen = +prompt("Enter table length")

// document.write("<h1>Table of "+tabNum+"</br></br></h1>")
// for(var i = 1; i<=tabLen; i++)
// {
//     document.write(tabNum+" x "+i+" = "+(tabNum*i)+"</br>")
// }

//Q5

// var F_arr = ["Apple","Banana","Mango","Orange","Strawberry"]
// document.write(F_arr.join("</br>"))
// document.write("</br>")

// for(var i = 0;i<F_arr.length;i++)
// {
//     document.write("</br>Element at index "+i+" is "+F_arr[i])
// }

//Q6

// document.write("<strong>Counting:</strong></br></br>")
// for(var i = 1; i<=15;i++)
// {
//     document.write(i+",")
// }

// document.write("</br></br><strong>Reverse Counting:</strong></br></br>")
// for(var i = 10; i>=1;i--)
// {
//     document.write(i+",")
// }

// document.write("</br></br><strong>Even:</strong></br></br>")
// for(var i = 0; i<=20;i++)
// {
//     if(i%2==0)
//     {
//         document.write(i+",")
//     }
// }

// document.write("</br></br><strong>Odd:</strong></br></br>")
// for(var i = 0; i<=20;i++)
// {
//     if(i%2!=0)
//     {
//         document.write(i+",")
//     }
// }

//Q7

// var ser = prompt("Welcome to ABC Bakery. what do you want to order Sir/Ma'am?")
// var Fruits = ["cake","apple pie","cookie","chips","patties"]

// if(Fruits.includes(ser))
// {
//     alert(ser+" is available at index "+Fruits.indexOf(ser)+" in our bakery")
// }
// else
// {
//     alert("we are sorry. "+ser+" is not available in our bakery")
// }

//Q8

// var arr = [24,53,78,91,12]
// document.write("Array items: "+arr+"</br>The largest number is "+arr.sort()[arr.length-1])

//Q9

// var arr = [24,53,78,91,12]
// document.write("Array items: "+arr+"</br>The smallest number is "+arr.sort()[0])

//Q10

//Ans1
// for(var i = 5;i<=100;i=i+5)
// {
//     document.write(i+",")
// }

//Ans2
// for(var i = 1;i<=100;i++)
// {
//     document.write(i*5+",")
//     if(i*5 >= 100)
//     {
//         break;
//     }
// }