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
    var vertices = [
        // 1
        // edge of the left one
        -0.96, -0.12, 0.0, 0.0, 1.0,     
        -0.95, -0.14, 0.0, 0.0, 1.0,     
        -0.95, -0.14, 0.0, 0.0, 1.0,     
        -0.32, -0.12, 1.0, 0.0, 0.0,
        -0.32, -0.12, 1.0, 0.0, 0.0,
        -0.16, -0.08, 1.0, 0.0, 0.0,
        -0.16, -0.08, 1.0, 0.0, 0.0,
        -0.08, -0.16, 1.0, 0.0, 0.0,
        -0.08, -0.16, 1.0, 0.0, 0.0,
        -0.04, -0.08, 1.0, 0.0, 0.0,
        -0.04, -0.08, 1.0, 0.0, 0.0,
        -0.04, 0.0, 1.0, 0.0, 0.0,
        -0.04, 0.0, 1.0, 0.0, 0.0,
        -0.08, 0.07, 1.0, 0.0, 0.0,
        -0.08, 0.07, 1.0, 0.0, 0.0,
        -0.16, 0.08, 1.0, 0.0, 0.0,
        -0.16, 0.08, 1.0, 0.0, 0.0,
        -0.17, 0.09, 1.0, 0.0, 0.0,
        -0.17, 0.09, 1.0, 0.0, 0.0,
        -0.24, 0.12, 1.0, 0.0, 0.0,
        -0.24, 0.12, 1.0, 0.0, 0.0,
        -0.28, 0.11, 1.0, 0.0, 0.0,
        -0.28, 0.11, 1.0, 0.0, 0.0,
        -0.44, 0.09, 1.0, 0.0, 0.0,
        -0.44, 0.09, 1.0, 0.0, 0.0,
        -0.8, 0.0, 0.0, 0.0, 1.0,
        -0.8, 0.0, 0.0, 0.0, 1.0,
        -0.76, -0.01, 0.0, 0.0, 1.0,
        -0.76, -0.01, 0.0, 0.0, 1.0,
        -0.44, 0.03, 1.0, 0.0, 0.0,
        -0.44, 0.03, 1.0, 0.0, 0.0,
        -0.3, 0.06, 1.0, 0.0, 0.0,
        -0.3, 0.06, 1.0, 0.0, 0.0,
        -0.3, 0.01, 1.0, 0.0, 0.0,
        -0.3, 0.01, 1.0, 0.0, 0.0,
        -0.24, -0.03, 1.0, 0.0, 0.0,
        -0.24, -0.03, 1.0, 0.0, 0.0,
        -0.36, -0.05, 1.0, 0.0, 0.0,
        -0.36, -0.05, 1.0, 0.0, 0.0,
        -0.96, -0.12, 0.0, 0.0, 1.0,

        // left side glass
        -0.27, 0.09, 1.0, 0.0, 0.0,
        -0.27, 0.02, 1.0, 0.0, 0.0,
        -0.27, 0.02, 1.0, 0.0, 0.0,
        -0.21, -0.01, 1.0, 0.0, 0.0,
        -0.21, -0.01, 1.0, 0.0, 0.0,
        -0.23, 0.04, 1.0, 0.0, 0.0,
        -0.23, 0.04, 1.0, 0.0, 0.0,
        -0.18, 0.06, 1.0, 0.0, 0.0,
        -0.18, 0.06, 1.0, 0.0, 0.0,
        -0.24, 0.09, 1.0, 0.0, 0.0,
        -0.24, 0.09, 1.0, 0.0, 0.0,
        -0.27, 0.09, 1.0, 0.0, 0.0,

        // top right glass
        -0.16, 0.06, 1.0, 0.0, 0.0,
        -0.16, -0.01, 1.0, 0.0, 0.0,
        -0.16, -0.01, 1.0, 0.0, 0.0,
        -0.08, 0.01, 1.0, 0.0, 0.0,
        -0.08, 0.01, 1.0, 0.0, 0.0,
        -0.11, 0.05, 1.0, 0.0, 0.0,
        -0.11, 0.05, 1.0, 0.0, 0.0,
        -0.16, 0.06, 1.0, 0.0, 0.0,

        // bottom right glass
        -0.14, -0.07, 1.0, 0.0, 0.0,
        -0.08, -0.12, 1.0, 0.0, 0.0,
        -0.08, -0.12, 1.0, 0.0, 0.0,
        -0.06, -0.05, 1.0, 0.0, 0.0,
        -0.06, -0.05, 1.0, 0.0, 0.0,
        -0.14, -0.07, 1.0, 0.0, 0.0,
        
        -0.24, -0.03, 1.0, 0.0, 0.0,
        -0.16, -0.01, 1.0, 0.0, 0.0,

        -0.16, -0.08, 1.0, 0.0, 0.0,
        -0.14, -0.07, 1.0, 0.0, 0.0,

        // right handle
        -0.48, -0.07, 0.0, 0.0, 1.0,
        -0.33, -0.08, 1.0, 0.0, 0.0,
        -0.33, -0.08, 1.0, 0.0, 0.0,
        -0.41, -0.12, 0.0, 0.0, 1.0,

        // left handle
        -0.52, 0.07, 0.0, 0.0, 1.0,
        -0.40, 0.07, 1.0, 0.0, 0.0,
        -0.40, 0.07, 1.0, 0.0, 0.0,
        -0.45, 0.03, 0.0, 0.0, 1.0,

        // center line
        0.0, 1.0, 0.0, 1.0, 0.0,
        0.0, -1.0, 0.0, 1.0, 0.0,

        // //2
        // // edge of the right one
        // 0.48, 0.04, 0.0, 0.0, 0.1,
        // 0.56, 0.04, 0.0, 0.0, 0.1,
        // 0.56, 0.04, 0.0, 0.0, 0.1,
        // 0.72, 0.07, 0.0, 0.0, 0.1,
        // 0.72, 0.07, 0.0, 0.0, 0.1,
        // 0.88, 0.07, 0.0, 0.0, 0.1,
        // 0.88, 0.07, 0.0, 0.0, 0.1,
        // 0.98, 0.05, 0.0, 0.0, 0.1

    ];

    // Create a linked-list for storing the vertices data
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        void main() {
            gl_PointSize = 10.0;
            gl_Position = vec4(aPosition, 0.0, 1.0);
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
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.LINES, 0, 150);
}