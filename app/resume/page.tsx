"use client";

// And delete this or some example implementation shown in the doc:
import myResume from '/public/documents/aaron_wang.pdf';

export default function Resume() {
    return (
        <div className = "container mx-auto">
            <iframe src={myResume} width = '100%' height = '980'></iframe>
        </div>
      )
    }    