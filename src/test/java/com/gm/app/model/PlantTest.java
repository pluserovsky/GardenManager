package com.gm.app.model;

import org.junit.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.Assert.*;

public class PlantTest {

    private static final String DATE_FORMAT = "yyyy-MM-dd";
    private SimpleDateFormat simpleDateFormat = new SimpleDateFormat(DATE_FORMAT);
    private Garden garden= new Garden();
    private Plant plant = new Plant();

    private Date firstDate;


    {
        try {
            firstDate = simpleDateFormat.parse("2018-09-16");
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    @Test
    public void setId() {
        long id=10;
        plant.setId(id);
        assertEquals((long)plant.getId(),id);
    }

    @Test
    public void setName() {
        String name = "Tulipan";
        plant.setName(name);
        assertEquals( plant.getName(), name);
    }

    @Test
    public void setDescription() {
        String description = "Kwiatek na parapecie nad lodówką";
        plant.setDescription(description);
        assertEquals( plant.getDescription(), description);
    }

    @Test
    public void setNotes() {
        String notes = "od Kasi";
        plant.setNotes(notes);
        assertEquals( plant.getNotes(), notes);
    }

    @Test
    public void setHydrated() {
        boolean last=true;
        plant.setHydrated(last);
        assertEquals(plant.isHydrated(),last);
    }

    @Test
    public void setHydrationCycle() {
        Long cycle = (long)1000000000;
        plant.setHydrationCycle(cycle);
        assertEquals(plant.getHydrationCycle(),cycle);
    }

    @Test
    public void setLastHydration() {
        plant.setLastHydration(firstDate);
        assertEquals(plant.getLastHydration(),firstDate);
    }

    @Test
    public void setFertilized() {
        boolean last=true;
        plant.setFertilized(last);
        assertEquals(plant.isFertilized(),last);
    }

    @Test
    public void setFertilizationCycle() {
        Long cycle = (long)1000000000;
        plant.setFertilizationCycle(cycle);
        assertEquals(plant.getFertilizationCycle(),cycle);
    }

    @Test
    public void setLastFertilization() {
        plant.setLastFertilization(firstDate);
        assertEquals(plant.getLastFertilization(),firstDate);
    }

    @Test
    public void setExaggerated() {
        boolean last=true;
        plant.setExaggerated(last);
        assertEquals(plant.isExaggerated(),last);
    }

    @Test
    public void setExaggerationCycle() {
        Long cycle = (long)1000000000;
        plant.setExaggerationCycle(cycle);
        assertEquals(plant.getExaggerationCycle(),cycle);
    }

    @Test
    public void setLastExaggeration() {
        plant.setLastExaggeration(firstDate);
        assertEquals(plant.getLastExaggeration(),firstDate);
    }

    @Test
    public void setMedicine() {
        boolean last=true;
        plant.setMedicine(last);
        assertEquals(plant.isMedicine(),last);
    }

    @Test
    public void setMedicineCycle() {
        Long cycle = (long)1000000000;
        plant.setMedicineCycle(cycle);
        assertEquals(plant.getMedicineCycle(),cycle);
    }

    @Test
    public void setLastMedicine() {
        plant.setLastMedicine(firstDate);
        assertEquals(plant.getLastMedicine(),firstDate);
    }

    @Test
    public void setGarden() {
        plant.setGarden(garden);
        assertEquals(plant.getGarden(),garden);
    }

    @Test
    public void setGardenId() {
        Long id=(long)1;
        plant.setGardenId(id);
        assertEquals(plant.getGardenId(),id);

    }
}