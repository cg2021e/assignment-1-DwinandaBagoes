function main() {
    //Access the canvas through DOM: Document Object Model
    var canvas = document.getElementById('myCanvas');   // The paper
    var gl = canvas.getContext('webgl');                // The brush and the paints
    // Define vertices data
    /**
     * A ( -0.5, -0.5 )
     * B (  0.5, -0.5 )
     * C (  0.0,  0.5 )
     */
    var Left_Vertices = [
        // 1
        // EDGE OF THE LEFT ONE
        -0.96, -0.12, 0.0, 0.6, 1.0,     
        -0.95, -0.14, 0.0, 0.6, 1.0,     
        -0.95, -0.14, 0.0, 0.6, 1.0,     
        -0.32, -0.12, 0.0, 0.0, 0.3,
        -0.32, -0.12, 0.0, 0.0, 0.3,
        -0.16, -0.08, 0.0, 0.0, 0.3,
        -0.16, -0.08, 0.0, 0.0, 0.3,
        -0.08, -0.16, 0.0, 0.0, 0.3,
        -0.08, -0.16, 0.0, 0.0, 0.3,
        -0.04, -0.08, 0.0, 0.0, 0.3,
        -0.04, -0.08, 0.0, 0.0, 0.3,
        -0.04, 0.0, 0.0, 0.0, 0.3,
        -0.04, 0.0, 0.0, 0.0, 0.3,
        -0.08, 0.07, 0.0, 0.0, 0.3,
        -0.08, 0.07, 0.0, 0.0, 0.3,
        -0.16, 0.08, 0.0, 0.0, 0.3,
        -0.16, 0.08, 0.0, 0.0, 0.3,
        -0.17, 0.09, 0.0, 0.0, 0.3,
        -0.17, 0.09, 0.0, 0.0, 0.3,
        -0.24, 0.12, 0.0, 0.0, 0.3,
        -0.24, 0.12, 0.0, 0.0, 0.3,
        -0.28, 0.11, 0.0, 0.0, 0.3,
        -0.28, 0.11, 0.0, 0.0, 0.3,
        -0.44, 0.09, 0.0, 0.0, 0.3,
        -0.44, 0.09, 0.0, 0.0, 0.3,
        -0.8, 0.0, 0.0, 0.6, 1.0,
        -0.8, 0.0, 0.0, 0.6, 1.0,
        -0.76, -0.01, 0.0, 0.6, 1.0,
        -0.76, -0.01, 0.0, 0.6, 1.0,
        -0.44, 0.03, 0.0, 0.0, 0.3,
        -0.44, 0.03, 0.0, 0.0, 0.3,
        -0.3, 0.06, 0.0, 0.0, 0.3,
        -0.3, 0.06, 0.0, 0.0, 0.3,
        -0.3, 0.01, 0.0, 0.0, 0.3,
        -0.3, 0.01, 0.0, 0.0, 0.3,
        -0.24, -0.03, 0.0, 0.0, 0.3,
        -0.24, -0.03, 0.0, 0.0, 0.3,
        -0.36, -0.05, 0.0, 0.0, 0.3,
        -0.36, -0.05, 0.0, 0.0, 0.3,
        -0.96, -0.12, 0.0, 0.6, 1.0,

        // left side glass
        -0.27, 0.09, 0.0, 0.0, 0.3,
        -0.27, 0.02, 0.0, 0.0, 0.3,
        -0.27, 0.02, 0.0, 0.0, 0.3,
        -0.21, -0.01, 0.0, 0.0, 0.3,
        -0.21, -0.01, 0.0, 0.0, 0.3,
        -0.23, 0.04, 0.0, 0.0, 0.3,
        -0.23, 0.04, 0.0, 0.0, 0.3,
        -0.18, 0.06, 0.0, 0.0, 0.3,
        -0.18, 0.06, 0.0, 0.0, 0.3,
        -0.24, 0.09, 0.0, 0.0, 0.3,
        -0.24, 0.09, 0.0, 0.0, 0.3,
        -0.27, 0.09, 0.0, 0.0, 0.3,

        // top right glass
        -0.16, 0.06, 0.0, 0.0, 0.3,
        -0.16, -0.01, 0.0, 0.0, 0.3,
        -0.16, -0.01, 0.0, 0.0, 0.3,
        -0.08, 0.01, 0.0, 0.0, 0.3,
        -0.08, 0.01, 0.0, 0.0, 0.3,
        -0.11, 0.05, 0.0, 0.0, 0.3,
        -0.11, 0.05, 0.0, 0.0, 0.3,
        -0.16, 0.06, 0.0, 0.0, 0.3,

        // bottom right glass
        -0.14, -0.07, 0.0, 0.0, 0.3,
        -0.08, -0.12, 0.0, 0.0, 0.3,
        -0.08, -0.12, 0.0, 0.0, 0.3,
        -0.06, -0.05, 0.0, 0.0, 0.3,
        -0.06, -0.05, 0.0, 0.0, 0.3,
        -0.14, -0.07, 0.0, 0.0, 0.3,
        
        -0.24, -0.03, 0.0, 0.0, 0.3,
        -0.16, -0.01, 0.0, 0.0, 0.3,

        -0.16, -0.08, 0.0, 0.0, 0.3,
        -0.14, -0.07, 0.0, 0.0, 0.3,

        // right handle
        -0.48, -0.07, 0.0, 0.6, 1.0,
        -0.33, -0.08, 0.0, 0.0, 0.3,
        -0.33, -0.08, 0.0, 0.0, 0.3,
        -0.41, -0.12, 0.0, 0.6, 1.0,

        // left handle
        -0.52, 0.07, 0.0, 0.6, 1.0,
        -0.40, 0.07, 0.0, 0.0, 0.3,
        -0.40, 0.07, 0.0, 0.0, 0.3,
        -0.45, 0.03, 0.0, 0.6, 1.0,

        // center line
        0.0, 1.0, 0.0, 1.0, 0.0,
        0.0, -1.0, 0.0, 1.0, 0.0       

    ];

    var Right_Vertices = [
        //2
        // EDGE OF THE RIGHT ONE(FRAME)
        0.48, 0.04, 0.0, 0.0, 0.3,
        0.56, 0.04, 0.0, 0.0, 0.3,
        0.56, 0.04, 0.0, 0.0, 0.3,
        0.72, 0.07, 0.0, 0.0, 0.3,
        0.72, 0.07, 0.0, 0.0, 0.3,
        0.88, 0.07, 0.0, 0.0, 0.3,
        0.88, 0.07, 0.0, 0.0, 0.3,
        0.98, 0.05, 0.0, 0.0, 0.3,
        0.98, 0.05, 0.0, 0.0, 0.3,
        0.97, -0.02, 0.0, 0.0, 0.3,
        0.97, -0.02, 0.0, 0.0, 0.3,
        0.93, -0.12, 0.0, 0.0, 0.3,
        0.93, -0.12, 0.0, 0.0, 0.3,
        0.84, -0.15, 0.0, 0.0, 0.3,
        0.84, -0.15, 0.0, 0.0, 0.3,
        0.70, -0.16, 0.0, 0.0, 0.3,
        0.70, -0.16, 0.0, 0.0, 0.3,
        0.63, -0.15, 0.0, 0.0, 0.3,
        0.63, -0.15, 0.0, 0.0, 0.3,
        0.56, -0.04, 0.0, 0.0, 0.3,
        0.56, -0.04, 0.0, 0.0, 0.3,
        0.54, -0.02, 0.0, 0.0, 0.3,
        0.54, -0.02, 0.0, 0.0, 0.3,
        0.50, -0.02, 0.0, 0.0, 0.3,
        0.50, -0.02, 0.0, 0.0, 0.3,
        0.48, -0.04, 0.0, 0.0, 0.3,
        0.48, -0.04, 0.0, 0.0, 0.3,
        0.41, -0.15, 0.0, 0.0, 0.3, 
        0.41, -0.15, 0.0, 0.0, 0.3, 
        0.34, -0.16, 0.0, 0.0, 0.3, 
        0.34, -0.16, 0.0, 0.0, 0.3, 
        0.20, -0.15, 0.0, 0.0, 0.3,
        0.20, -0.15, 0.0, 0.0, 0.3,
        0.11, -0.12, 0.0, 0.0, 0.3,
        0.11, -0.12, 0.0, 0.0, 0.3,
        0.07, -0.02, 0.0, 0.0, 0.3,
        0.07, -0.02, 0.0, 0.0, 0.3,
        0.06, 0.05, 0.0, 0.0, 0.3,
        0.06, 0.05, 0.0, 0.0, 0.3,
        0.16, 0.07, 0.0, 0.0, 0.3, 
        0.16, 0.07, 0.0, 0.0, 0.3,
        0.32, 0.07, 0.0, 0.0, 0.3, 
        0.32, 0.07, 0.0, 0.0, 0.3,
        0.48, 0.04, 0.0, 0.0, 0.3,

        // Right lens
        0.84, -0.13, 0.0, 0.0, 0.3,
        0.70, -0.14, 0.0, 0.0, 0.3,
        0.70, -0.14, 0.0, 0.0, 0.3,
        0.65, -0.13, 0.0, 0.0, 0.3,
        0.65, -0.13, 0.0, 0.0, 0.3,
        0.59, -0.02, 0.0, 0.0, 0.3,
        0.59, -0.02, 0.0, 0.0, 0.3,
        0.59, 0.0, 0.0, 0.0, 0.3,
        0.59, 0.0, 0.0, 0.0, 0.3,
        0.62, 0.02, 0.0, 0.0, 0.3,
        0.62, 0.02, 0.0, 0.0, 0.3,       
        0.72, 0.04, 0.0, 0.0, 0.3,
        0.72, 0.04, 0.0, 0.0, 0.3,
        0.88, 0.04, 0.0, 0.0, 0.3,
        0.88, 0.04, 0.0, 0.0, 0.3,
        0.93, 0.02, 0.0, 0.0, 0.3,
        0.93, 0.02, 0.0, 0.0, 0.3,
        0.90, -0.10, 0.0, 0.0, 0.3,
        0.90, -0.10, 0.0, 0.0, 0.3,
        0.84, -0.13, 0.0, 0.0, 0.3,

        // left lens
        0.20, -0.13, 0.0, 0.0, 0.3,
        0.34, -0.14, 0.0, 0.0, 0.3,
        0.34, -0.14, 0.0, 0.0, 0.3,
        0.39, -0.13, 0.0, 0.0, 0.3,
        0.39, -0.13, 0.0, 0.0, 0.3,
        0.45, -0.02, 0.0, 0.0, 0.3,
        0.45, -0.02, 0.0, 0.0, 0.3,
        0.45, 0.0, 0.0, 0.0, 0.3,
        0.45, 0.0, 0.0, 0.0, 0.3,
        0.42, 0.02, 0.0, 0.0, 0.3,
        0.42, 0.02, 0.0, 0.0, 0.3,       
        0.32, 0.04, 0.0, 0.0, 0.3,
        0.32, 0.04, 0.0, 0.0, 0.3,
        0.16, 0.04, 0.0, 0.0, 0.3,
        0.16, 0.04, 0.0, 0.0, 0.3,
        0.11, 0.02, 0.0, 0.0, 0.3,
        0.11, 0.02, 0.0, 0.0, 0.3,
        0.14, -0.10, 0.0, 0.0, 0.3,
        0.14, -0.10, 0.0, 0.0, 0.3,
        0.20, -0.13, 0.0, 0.0, 0.3
    ];

    var vertices = [...Left_Vertices,...Right_Vertices]; 

    // Create a linked-list for storing the vertices data
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform mat4 uTranslate;
        void main() {
            gl_PointSize = 10.0;
            gl_Position = uTranslate * vec4(aPosition, 0.0, 1.0);
            vColor = aColor;
        }
    `;
    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);    // Yellow
        }
    `;
    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();
    // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);
    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);
    // Teach the computer how to collect
    //  the positional values from ARRAY_BUFFER
    //  to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition, 
        2, 
        gl.FLOAT, 
        false, 
        5 * Float32Array.BYTES_PER_ELEMENT, 
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor, 
        3, 
        gl.FLOAT, 
        false, 
        5 * Float32Array.BYTES_PER_ELEMENT, 
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);
    var speed = 0.0176;
    var dy = 0;
    // Create a uniform to animate the vertices
    const uTranslate = gl.getUniformLocation(shaderProgram, 'uTranslate');
    
    function render() {
        //control the bouncing range
        if (dy >= 0.75 || dy <= -0.55) speed = -speed;
		dy += speed;
        
        const rightPosition = [
		1.0, 0.0, 0.0, 0.0,
		0.0, 1.0, 0.0, 0.0,
		0.0, 0.0, 1.0, 0.0,
		0, dy, 0.0, 1.0,
	]

	const leftPosition = [
		1.0, 0.0, 0.0, 0.0,
		0.0, 1.0, 0.0, 0.0,
		0.0, 0.0, 1.0, 0.0,
		0, 0.0, 0.0, 1.0,
	]
		
        //coloring canvas
	gl.clearColor(1.0, 1.0, 1.0, 0.8); 
	gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniformMatrix4fv(uTranslate, false, leftPosition);
        gl.drawArrays(gl.LINES, 0, Left_Vertices.length/5);

		gl.uniformMatrix4fv(uTranslate, false, rightPosition);
        gl.drawArrays(gl.LINES, Left_Vertices.length/5, Right_Vertices.length/5);
            
        requestAnimationFrame(render);
    }
    render();
}
