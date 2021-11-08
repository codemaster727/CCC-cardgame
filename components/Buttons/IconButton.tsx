import { ReactNode } from 'react';
interface IconButtonInterface {
    children?: ReactNode;
    className?: string;
}
export const IconButton = ({
    children = <>Please insert Node</>,
    className = "",
}: IconButtonInterface) => {
    return (
      <div className={`rounded-xl p-3.5 bg-light-color-main-4 dark:bg-dark-color-main-4 border-light-color-main-3 dark:border-light-color-main-3 ${className}`}>
        {children}
      </div>
    )
}

