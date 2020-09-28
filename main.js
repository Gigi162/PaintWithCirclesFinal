canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var mouseEvent = "Empty";

color = "black";

line_width = 1;

radius = 20;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent ="mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent ="mouseLeave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent ="mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_mouse_x= e.clientX - canvas.getBoundingClientRect().left;
    current_position_mouse_y= e.clientY - canvas.getBoundingClientRect().top;
    if (mouseEvent=="mouseDown"){

        color= document.getElementById("color_box").value;
        line_width= document.getElementById("width_box").value;
        radius= document.getElementById("radius_box").value;

        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth = line_width;
        ctx.arc(current_position_mouse_x, current_position_mouse_y, radius, 0, 2*Math.PI)
        ctx.stroke();
        


        console.log("Current position of x and y are = ");
        console.log("x= " + current_position_mouse_x + " y = " + current_position_mouse_y);
        ctx.stroke();
    }

}

function clearArea() {

    ctx.clearRect(0,0, canvas.width, canvas.height);
}