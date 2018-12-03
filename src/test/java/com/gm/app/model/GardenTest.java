package com.gm.app.model;

import org.junit.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.*;

public class GardenTest {

    private static final String DATE_FORMAT = "yyyy-MM-dd";
    private SimpleDateFormat simpleDateFormat = new SimpleDateFormat(DATE_FORMAT);
    private Garden garden = new Garden();

    private Date firstDate;
    private Date secondDate;
    private Date thirdDate;

    {
        try {
            firstDate = simpleDateFormat.parse("2018-09-16");
            secondDate = simpleDateFormat.parse("2018-09-03");
            thirdDate = simpleDateFormat.parse("2018-11-29");

        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void builder() {
    }

    @Test
    public void setId() {
        long id = 10;
        garden.setId(id);
        assertEquals((long) garden.getId(), id);
    }

    @Test
    public void setUsername() {
        String username = "lukasz";
        garden.setUsername(username);
        assertEquals(garden.getUsername(), username);
    }

    @Test
    public void setName() {
        String name = "Kuchnia";
        garden.setName(name);
        assertEquals(garden.getName(), name);
    }

    @Test
    public void setDescription() {
        String description = "Kwiatki na parapecie nad lodówką";
        garden.setDescription(description);
        assertEquals(garden.getDescription(), description);
    }

    @Test
    public void setPlantsList() {
        Plant plant1 = Plant.builder()
                .id((long) 1)
                .name("Róża")
                .description("Czerwona")
                .notes("od babci")
                .isHydrated(true)
                .hydrationCycle((long) 10000)
                .lastHydration(firstDate)
                .garden(garden)
                .gardenId((long) 1).build();
        Plant plant2 = Plant.builder()
                .id((long) 2)
                .name("Tulipan")
                .description("Żółty")
                .notes("")
                .isHydrated(true)
                .hydrationCycle((long) 20000)
                .lastHydration(secondDate)
                .garden(garden)
                .gardenId((long) 1).build();
        Plant plant3 = Plant.builder()
                .id((long) 3)
                .name("Róża")
                .description("Biała")
                .notes("dla dziadka")
                .isHydrated(false)
                .hydrationCycle((long) 30000)
                .lastHydration(thirdDate)
                .garden(garden)
                .gardenId((long) 1).build();

        List<Plant> plants = new ArrayList<>();
        plants.add(plant1);
        plants.add(plant2);
        plants.add(plant3);
        garden.setPlantsList(plants);
        assertEquals(garden.getPlantsList(), plants);
    }


}