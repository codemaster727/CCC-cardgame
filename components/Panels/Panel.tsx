import { ReactNode } from 'react';
interface PanelInterface {
    children?: ReactNode;
    className?: string;
}
export const Panel = ({
    children = <>Please insert Node</>,
    className = "",
}) => {
    return (
      <div className={`rounded-2xl p-3 bg-light-color-main-1 dark:bg-dark-color-main-1 text-dark-color-main-1 dark:text-light-color-main-1 ${className}`}>
        {children}
      </div>
    )
}

