import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import NewsCard from "./components/NewsCard/NewsCard";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("Renders news data", async () => {
    const newsData = { 
        "uri": "nyt://article/000d5bdf-6254-53fb-b8f8-156b7279d0c0",
        "url": "https://www.nytimes.com/2021/11/18/science/lunar-eclipse-full-moon-tonight.html",
        "id": 100000008080806,
        "asset_id": 100000008080806,
        "source": "New York Times",
        "published_date": "2021-11-18",
        "updated": "2021-11-19 12:38:47",
        "section": "Science",
        "subsection": "",
        "nytdsection": "science",
        "adx_keywords": "Space and Astronomy;Eclipses;Moon",
        "column": null,
        "byline": "By Joey Roulette",
        "type": "Article",
        "title": "Thursday and Friday’s Partial Lunar Eclipse Was the Longest in 580 Years",
        "abstract": "The partial eclipse will turn the moon rusty reddish hues and be visible across North America and parts of South America, Asia and Australia.",
        "des_facet": [
            "Space and Astronomy",
            "Eclipses",
            "Moon"
        ],
        "org_facet": [],
        "per_facet": [],
        "geo_facet": [],
        "media": [
            {
                "type": "image",
                "subtype": "photo",
                "caption": "A lunar eclipse in May over Santa Monica, Calif. Tonight’s lunar eclipse, extending into tomorrow, will last just over six hours.",
                "copyright": "Frederic J. Brown/Agence France-Presse — Getty Images",
                "approved_for_syndication": 1,
                "media-metadata": [
                    {
                        "url": "https://static01.nyt.com/images/2021/11/18/science/18lunareclipse1/18lunareclipse1-thumbStandard.jpg",
                        "format": "Standard Thumbnail",
                        "height": 75,
                        "width": 75
                    },
                    {
                        "url": "https://static01.nyt.com/images/2021/11/18/science/18lunareclipse1/18lunareclipse1-mediumThreeByTwo210.jpg",
                        "format": "mediumThreeByTwo210",
                        "height": 140,
                        "width": 210
                    },
                    {
                        "url": "https://static01.nyt.com/images/2021/11/18/science/18lunareclipse1/18lunareclipse1-mediumThreeByTwo440.jpg",
                        "format": "mediumThreeByTwo440",
                        "height": 293,
                        "width": 440
                    }
                ]
            }
        ],
        "eta_id": 0
    };

    
    jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve(
        { json: () => Promise.resolve(newsData) }
    ));
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
        render(<NewsCard article={newsData} />, container);
    });

    // expect(container.querySelector("container").textContent).toBe(newData.url);
    expect(document.getElementById("byline").textContent).toBe(newsData.byline);
    expect(document.getElementById("title").textContent).toBe(newsData.title);
    expect(document.getElementById("published_date").textContent).toBe(newsData.published_date);

    // remove the mock to ensure tests are completely isolated  
    global.fetch.mockRestore();
});