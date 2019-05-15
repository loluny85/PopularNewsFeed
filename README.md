# This is a news feed application designed and developed for Mobile device.

# To run the application - 
--------------------------
After you have git cloned the repository, please follow the below steps-

1) Navigate to 'PopularNewsFeed' folder, command: cd PopularNewsFeed
2) Install the dependencies, command: yarn install
3) Star the application, command: yarn start

# Walk-through the application- 
--------------------------------
- The top section is the header section which contains 3 elements -
1) The Menu bar - On the leftmost side is the Menu bar. On clicking the hamburger icon the dropdown opens. There is a close button on the dropdown, on click of which the dropdown closes. The dropdown items are static items.

2) The Search input box - In the middle is the Search input box. User can filter the News result based on a search term. To reduce click streams, user do not have to hit enter or click on the search icon. Filtering of the news result happens when user types.

3) The Sort bar - At the rightmost side is the Sort bar. On click of the 3 dot icon, a dropdown opens. This has a list of options like sorting the news by published date or to show news which are n days old.

- The second and last section is the News result section. This is where the Most Popular news result is populated. By default, it shows news which are 7 days old.
Each news is shown as a border-less card. The card contains -
    An avatar icon on the left.
    In the middle is the news title, publisher details and posted date in the same order vertically.
    The right most side has a chevron. On click of this, detailed news description shows up like an accordion. This icon toggles the news description section.