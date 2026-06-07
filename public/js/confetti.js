/**
 * Dream Decors Confetti Physics Engine
 * Creates elegant rose gold, champagne, and gold floating confetti particles
 */

window.Confetti = {
  canvas: null,
  ctx: null,
  particles: [],
  animationId: null,

  init(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    
    window.addEventListener('resize', () => this.resize());
  },

  resize() {
    if (this.canvas) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    }
  },

  fire() {
    if (!this.canvas) this.init('confetti-canvas');
    if (!this.canvas) return;

    this.particles = [];
    // Elegant Wedding color scheme (Rose Gold, Champagne, Pale Gold, Blush Pink, Classic Gold)
    const colors = ['#E5BA73', '#C58940', '#F4EAE6', '#E8A0A2', '#F2C8C9', '#B8860B'];
    
    // Spawn 160 luxurious slow-moving floating particles shooting upwards and inwards
    for (let i = 0; i < 80; i++) {
      // Left side shooter
      this.particles.push({
        x: 0,
        y: this.canvas.height * 0.8,
        vx: 8 + Math.random() * 12,
        vy: -12 - Math.random() * 14,
        size: 6 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI,
        rotationSpeed: -0.05 + Math.random() * 0.1,
        opacity: 1,
        drag: 0.97,
        gravity: 0.35
      });
      // Right side shooter
      this.particles.push({
        x: this.canvas.width,
        y: this.canvas.height * 0.8,
        vx: -8 - Math.random() * 12,
        vy: -12 - Math.random() * 14,
        size: 6 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI,
        rotationSpeed: -0.05 + Math.random() * 0.1,
        opacity: 1,
        drag: 0.97,
        gravity: 0.35
      });
    }

    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.tick();
  },

  tick() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    let activeParticles = false;

    this.particles.forEach(p => {
      if (p.opacity <= 0) return;
      activeParticles = true;

      p.x += p.vx;
      p.y += p.vy;
      
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.vy *= p.drag;
      
      p.rotation += p.rotationSpeed;
      
      if (p.vy > 0) {
        p.opacity -= 0.012; // Slow elegant fade out
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      
      // Draw premium circular / oval metallic petals instead of sharp squares
      this.ctx.beginPath();
      this.ctx.ellipse(0, 0, p.size * 0.7, p.size, 0, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.restore();
    });

    if (activeParticles) {
      this.animationId = requestAnimationFrame(() => this.tick());
    } else {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
};
