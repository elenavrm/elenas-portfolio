import { useEffect } from 'react';

const useOverflowHidden = (isOpen) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
};

export default useOverflowHidden;