import React from 'react';

// Define the type for the props
type Props = {
  params: {
    name: string; 
  };
};

function Page({ params }: Props) {
  return <div>{params.name}</div>;
}

export default Page;
