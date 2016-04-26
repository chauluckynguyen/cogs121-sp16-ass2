ASSIGNMENT 2 
============  

MEMBER CONTRIBUTION
-------------------
**Chau Lucky Nguyen **: Styled the bar chart and legend to be informative and aesthetically pleasing. Also worked together with Jordan on the README file.  

**Daniel Beumjoo Kim**: Getting the queries from DELPHI database to connect to the server. Rendering some data onto bar chart and D3 issues.  

**Jordan Yoshihara**: Helped fill out the README, figure out how to color the bars, add in tags, and some of the styling.  

**Steven Lim**: Helped create queries to get results from DELPHI and pass along that information to the client. Worked on D3 javascript toshow data on the bar chart as well.  

**Zhixing (Simon) Meng**: Worked on displaying data from DELPHI using d3.js and tried to figure out how to use the outside data in the format of .csv

SIX DESIGN PRINCIPLES
---------------------
**Discoverability/Signifiers**: 
In hope to make it easier for the users to find their interested points of the application, we grouped the data by area code. Because of this, users can easily see which areas in San Diego have higher or lower profit values. Users can also see the breakdown of the profit value of each area when they hover over the bars to understand exactly why a specific area has that specific rating. 

**Learnability**: 
To help users easily learn and remember how to interact with the application, we added a legend table that explains what each color represents and how the profit values and ratings were calculated. Green often symbolizes positivity which is why we chose green to represent high ratings. Yellow is the color of caution, which is why we chose yellow to represent areas that are mediocre. Lastly, red represents a negative emotion, which is why we chose red to represent areas that have low ratings. The legend also explains how the profit value and ratings were calculated. We added icons to helps users to better remember the formula.  

**Feedback**:  
There are two points of interaction: 1) sorting the graph and 2) hovering over the bars. Inside the legend exists a checkbox showing that the users can sort the graph. When it is checked, the graph immediately animates sorting. In addition, there is a help text that tells the users to hover over the bars for more details. When a user hovers over an item, a tip immediately appears above the bar.  

**Natural Mapping/Mental Metaphors**  
Visually, the bars' heights will indicate how high or low a profit value of each area is. The bars are also color coded green, yellow, and red to represent high, mediocre, and low ratings, respectively. There are also icons next to each factor used to calculate the profit value to make it visually clear how the profit value was generated.  

**Constraints**  
To guide the flow of the user interaction, the users are only allowed to see the breakdown details for one area when they hover over a specific bar. This contraint helps the users focus on that particular area. It also prevents confusion over what data the user is looking at.  

**Error Prevention/Recovery**  
To prevent any confusion/error, we color coded the bars according to their respective values. Because of this, users can easily see what areas are considered high-profit, medium-profit, and low-profit if sortind does not work for some reason. Additionally, there is a legend table at the top of the bar chart to clarify any misconceptions the user might have about the data represented.  

DESIGN DECISIONS
----------------
Overall, we wanted to present the user with a very simple interface for looking at otherwise very complex data. To accomplish this, we limited the number of interactions a user can perform with our interface so that the mapping would be clear and concise. We chose to use a sortable graph because it seemed to be the most appropriate for showing a uswer which areas were more profitable visually. Our target user for this application is a real estate agent looking to see which areas would be most profitable to invest in. To help build the application, our team added the Bootstrap CSS Library to use their glyphicons to easily represent the operands of the Profit Value formula of the legend. We believed it gave more visuals to our formula, and it was easier to use Bootstrap's already made icons instead of creating new ones. We also included D3 Tip (d3tips.js) because it would allow users to explore the data and better see the calculations of the profit values broken down into different factors.  


