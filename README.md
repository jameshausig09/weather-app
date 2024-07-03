## My weather app

 <!-- Task for 4. July -->
 Hey man, today I would like you to refactor your code, which means, to have the same functionality but with less lines. This means that code is cleaner and runs slightly faster with less lines, it's still doing the same thing but when you refactor code you are making it smaller.

 For example in your code:

```
{filteredCities.map((city) => {
    const formattedCityStr = formattedCity(city);
    return (
        <CityCard name={formattedCityStr} temp={0} imageSrc={cloudySkies} />
    );
})}
```

we can refactor this down smaller and still do the same thing:

```
{filteredCities.map((city) => (
    <CityCard name={formattedCity(city)} temp={0} imageSrc={cloudySkies} />
))}
```

I have done two things here. I have removed the variabble where we set the formattedCity and passed it directly into the prop of the CityCard name, secondly I am directly returning the CityCard instead of using the curly brackets and returning it. These little changes can improve speed and overall performance of code when it is executed.

Have a look around your project and see if there are places where you can refactor your code.

Some reading material: https://medium.com/@london.lingo.01/the-art-of-code-refactoring-in-javascript-techniques-for-improving-code-quality-edbfd119584a

---

When you are done with that and want to try something new, let's have a look at how a CMS (Content Management System) can be used in your project - they are used for passing in information like words, content and images which a client or customer would want on their website if you are making a project for them.