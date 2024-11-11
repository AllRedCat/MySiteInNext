// components/handleClick.tsx
'use client';

const WindowSizeButton = () => {
    const handleClick = () => {
        console.log(window.innerWidth);
    };

    return (
        <button onClick={handleClick}>
            Teste janela
        </button>
    );
};

export default WindowSizeButton;
