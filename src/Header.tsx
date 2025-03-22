import React from 'react';

type MyComponentProps = {
    message: string;
};

const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
    return <div>{message}</div>;
};

export default MyComponent;