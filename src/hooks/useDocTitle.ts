import { useEffect, useState } from 'react';

function useDocTitle(title: string) {
  const [docTitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return [docTitle, setDocTitle] as const;
}

export default useDocTitle;
