import {SplitContainerProps} from "@interfaces";
import {PropsWithChildren} from "react";

const ContentArea = ({ children }: PropsWithChildren) => (
    <div className="w-full md:w-1/2 space-y-5 px-5">{children}</div>
);
export const SplitContainer = ({ leftChildren, rightChildren }: SplitContainerProps) => {
    return(
        <div className="container mx-auto p-6 flex flex-wrap justify-between items-start">
            <ContentArea>
                { leftChildren }
            </ContentArea>
            <ContentArea>
                { rightChildren }
            </ContentArea>
        </div>
    );
};
