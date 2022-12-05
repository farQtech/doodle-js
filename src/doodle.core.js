class Core {
    //canvas element
     canvas;
    //canvas context  
     ctx;
    // last known position
    pos = { x: 0, y: 0 };

    pointsToSave = [];

    constructor() {
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
        this.pos.x = event.clientX;
        this.pos.y = event.clientY;
    }

    // resize canvas
    resize() {
        this.ctx.canvas.width = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;
    }

    draw(mouseEvent) {
        this.pointsToSave.push({ x: this.pos.x, y: this.pos.y, mouseEvent: mouseEvent });

        event.preventDefault();

        // mouse left button must be pressed
        if (mouseEvent.buttons !== 1) return;

        this.ctx.beginPath(); // begin

        this.ctx.lineWidth = 5;
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = '#c0392b';

        this.ctx.moveTo(this.pos.x, this.pos.y); // from
        setPosition(mouseEvent);
        this.ctx.lineTo(this.pos.x, this.pos.y); // to

        this.ctx.stroke(); // draw it!
    }

    reDraw() {
        // clear canvas
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);

        // redraw
        this.pointsToSave.forEach(point => {
            // mouse left button must be pressed
            if (point.mouseEvent.buttons !== 1) return;

            this.ctx.beginPath(); // begin

            this.ctx.lineWidth = 5;
            this.ctx.lineCap = 'round';
            this.ctx.strokeStyle = '#000';

            this.ctx.moveTo(point.x, point.y); // from
            setPosition(point.mouseEvent);
            this.ctx.lineTo(point.x, point.y); // to

            this.ctx.stroke(); // draw it!
        });
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        // some hotfixes... ( ≖_≖)
        document.body.style.margin = 0;
        this.canvas.style.position = 'fixed';
        this.canvas.style.background = 'transparent';
        this.canvas.style.top = 0;
        this.canvas.style.right = 0;
        this.canvas.style.bottom = 0;
        this.canvas.style.left = 0;
        this.canvas.style.zIndex = 1000;

        // get canvas 2D context and set him correct size
        this.ctx = this.canvas.getContext('2d');
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
        this.canvas = document.createElement('button');
        document.body.appendChild(this.canvas);
        // some hotfixes... ( ≖_≖)
        document.body.style.margin = 0;
        this.canvas.style.position = 'fixed';
        this.canvas.style.color = 'red';
        this.canvas.style.top = 0;
        this.canvas.style.right = 0;
        this.canvas.style.bottom = 0;
        this.canvas.style.left = 0;
        this.canvas.style.zIndex = 1000;
    }
}

module.exports = Core;