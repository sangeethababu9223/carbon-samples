import { AILabel, AILabelContent } from "@carbon/react";
import './AILabelCustom.scss';

export default function AILabelCustom () {
    return(
        <AILabel>
            <AILabelContent>
                <p className="secondary">AI Explained</p>
                <h1>84%</h1>
                <p className="secondary bold">Confidence score</p>
                <p className="secondary">
                Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
                </p>
                <hr />
                <p className="secondary">Model type</p>
                <p className="bold">Foundation model</p>
            </AILabelContent>
        </AILabel>
    )
}