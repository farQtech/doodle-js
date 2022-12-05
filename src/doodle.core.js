class Core {
    //canvas element
     canvas;
    //canvas context  
     ctx;
    // last known position
    pos = { x: 0, y: 0 };

    pointsToSave = [];

    constructor() {
        // add set up code ....
        
        this.createCanvas();     

  

        this.resize();

        window.addEventListener('resize', this.resize);
        document.addEventListener('mousemove', this.draw);
        document.addEventListener('mousedown', this.setPosition);
        document.addEventListener('mouseenter', this.setPosition);
        document.addEventListener('contextmenu', this.reDraw);

    }

    // set cursor positions.
    setPosition(event) {
        pos.x = event.clientX;
        pos.y = event.clientY;
    }

    // resize canvas
    resize() {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
    }

    draw(mouseEvent) {
        pointsToSave.push({ x: pos.x, y: pos.y, mouseEvent: mouseEvent });

        event.preventDefault();

        // mouse left button must be pressed
        if (mouseEvent.buttons !== 1) return;

        ctx.beginPath(); // begin

        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#c0392b';

        ctx.moveTo(pos.x, pos.y); // from
        setPosition(mouseEvent);
        ctx.lineTo(pos.x, pos.y); // to

        ctx.stroke(); // draw it!
    }

    reDraw() {
        // clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // redraw
        pointsToSave.forEach(point => {
            // mouse left button must be pressed
            if (point.mouseEvent.buttons !== 1) return;

            ctx.beginPath(); // begin

            ctx.lineWidth = 5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#000';

            ctx.moveTo(point.x, point.y); // from
            setPosition(point.mouseEvent);
            ctx.lineTo(point.x, point.y); // to

            ctx.stroke(); // draw it!
        });
    }

    createCanvas() {
        canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        // some hotfixes... ( ≖_≖)
        document.body.style.margin = 0;
        canvas.style.position = 'fixed';
        canvas.style.background = 'transparent';
        canvas.style.top = 0;
        canvas.style.right = 0;
        canvas.style.bottom = 0;
        canvas.style.left = 0;
        canvas.style.zIndex = 1000;

        // get canvas 2D context and set him correct size
        ctx = canvas.getContext('2d');
    }

    /**
     * renders buttons on the UI
     * @param {*} ButtonOptions 
     * ButtonOptions: {
     *  isAutoSave: boolean,
     *  isRectEnabled: boolean,
     *  btnBar: {
     *      bgColor: string,
     *      position: Top | Bottom | Left | Right
     *  }
     * }
     */
    renderButtons(ButtonOptions){
        canvas = document.createElement('button');
        document.body.appendChild(canvas);
        // some hotfixes... ( ≖_≖)
        document.body.style.margin = 0;
        canvas.style.position = 'fixed';
        canvas.style.color = 'red';
        canvas.style.top = 0;
        canvas.style.right = 0;
        canvas.style.bottom = 0;
        canvas.style.left = 0;
        canvas.style.zIndex = 1000;
    }
}

module.exports = Core;