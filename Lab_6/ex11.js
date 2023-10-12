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

printer(add, 2, 3);