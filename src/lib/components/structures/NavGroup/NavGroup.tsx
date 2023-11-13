import React, {PropsWithChildren} from "react";

export const NavGroup = ({children}: PropsWithChildren) => {
    return(
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
                { children }
            </div>
        </div>
    );
};
