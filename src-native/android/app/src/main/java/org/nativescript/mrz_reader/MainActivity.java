package org.nativescript.mrz_reader;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;

import com.mercuriete.mrz.reader.CaptureActivity;
import com.mercuriete.mrz.reader.PreferencesActivity;

import org.jmrtd.lds.icao.MRZInfo;

public class MainActivity extends AppCompatActivity {

    static int REQUEST_CODE = 1001;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button btnStart = (Button) findViewById(R.id.btn_start);
        btnStart.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setClass(getApplicationContext(), CaptureActivity.class);
                startActivityForResult(intent, REQUEST_CODE);
            }
        });

        Button btnPreferences = (Button) findViewById(R.id.btn_preferences);
        btnPreferences.setOnClickListener(new Button.OnClickListener() {
            public void onClick(View v) {
                Intent intent = new Intent();
                intent.setClass(getApplicationContext(), PreferencesActivity.class);
                startActivity(intent);
            }
        });

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if(requestCode == REQUEST_CODE && resultCode == RESULT_OK) {
            Log.i(MainActivity.class.getSimpleName(), "Value: " +  ((MRZInfo) data.getSerializableExtra(CaptureActivity.MRZ_RESULT)).toString());
            String picturePath = data.getExtras().getString(CaptureActivity.MRZ_PICTURE_PATH);
            if(picturePath != null){
                Bitmap bitmap = BitmapFactory.decodeFile(picturePath);
                ImageView mrzPicture = (ImageView) findViewById(R.id.mrz_picture);
                mrzPicture.setImageBitmap(bitmap);
            }
        }
    }
}
