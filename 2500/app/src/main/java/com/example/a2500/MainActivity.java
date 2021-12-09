package com.example.a2500;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.location.Address;
import android.location.Geocoder;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.google.android.gms.maps.model.LatLng;

import java.io.IOException;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate ( savedInstanceState );
        setContentView ( R.layout.activity_main );


    }
    public Address buscarEndereco(double Latitude, double Longitude) throws IOException {

        Address address = null;

        Geocoder geocoder = new Geocoder(getApplicationContext());


        List<Address> addresses = geocoder.getFromLocation(Latitude, Longitude, 1);
        if (addresses.size() > 0) {

            address = addresses.get(0);
        }
        return address;
    }

}
