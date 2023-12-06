gsap.to('.overlay', {y: '-100vh', delay: 1.5});
gsap.to('.layer-1', {y: '-100vh', delay: 0.5});
gsap.to('.layer-2', {y: '-100vh', delay: 0.7});
gsap.to('.layer-3', {y: '-100vh', delay: 0.9});

gsap.fromTo('.text',
    {x: '-30rem', opacity: 0},
    {x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 2});
gsap.fromTo('.btn',
    {x: '-30rem', opacity: 0},
    {x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 2});