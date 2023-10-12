function add(x, y)
{
    let z;
    z = x + y;
    return z;
}

function printer(add, x, y)
{
    console.log(add(x, y));
}

printer(function(num1, num2)
{
    return num1 * num2;
}, 2, 3);
