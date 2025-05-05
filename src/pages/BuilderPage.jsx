import { BuilderComponent, builder } from '@builder.io/react';
import { useEffect, useState } from 'react';

builder.init('c4edb9e97ba94532a3fd5cea5e223650); // Replace with your real Builder.io key

export default function BuilderPage() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    builder
      .get('page', { url: window.location.pathname })
      .promise()
      .then((content) => setContent(content));
  }, []);

  return (
    <div>
      <BuilderComponent content={content} model="page" />
    </div>
  );
}
