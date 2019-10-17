package com.ourmaninthefield;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.oblador.vectoricons.VectorIconsPackage;
import io.invertase.firebase.auth.ReactNativeFirebaseAuthPackage;
import io.invertase.firebase.analytics.ReactNativeFirebaseAnalyticsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.ourmaninthefield.generated.BasePackageList;
import com.swmansion.reanimated.ReanimatedPackage;
import com.swmansion.rnscreens.RNScreensPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;

import org.unimodules.adapters.react.ReactAdapterPackage;
import org.unimodules.adapters.react.ModuleRegistryAdapter;
import org.unimodules.adapters.react.ReactModuleRegistryProvider;
import org.unimodules.core.interfaces.Package;
import org.unimodules.core.interfaces.SingletonModule;
import expo.modules.constants.ConstantsPackage;
import expo.modules.permissions.PermissionsPackage;
import expo.modules.filesystem.FileSystemPackage;

import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
  private final ReactModuleRegistryProvider mModuleRegistryProvider = new ReactModuleRegistryProvider(
    new BasePackageList().getPackageList(),
    Arrays.<SingletonModule>asList()
  );

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {

      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // // Packages that cannot be autolinked yet can be added manually here, for example:
      // // packages.add(new MyReactNativePackage());
      // packages.add(new RNFirebasePackage()); //=> remove this line and also from header import
      // packages.add(new RNFirebaseDatabasePackage());
      // packages.add(new RNFirebaseAuthPackage());


      packages.add(new MainReactPackage());
      packages.add(new VectorIconsPackage());
      packages.add(new ReactNativeFirebaseAuthPackage());
      packages.add(new ReactNativeFirebaseAnalyticsPackage());
      packages.add(new ReanimatedPackage());
      packages.add(new RNGestureHandlerPackage());
      packages.add(new RNScreensPackage());
      packages.add(new ModuleRegistryAdapter(mModuleRegistryProvider));
      packages.add(new ReactNativeFirebaseAppPackage());

      return packages;

      // return Arrays.<ReactPackage>asList(
      //     new MainReactPackage(),
      //       new VectorIconsPackage(),
      //       new ReactNativeFirebaseAuthPackage(),
      //       new ReactNativeFirebaseAnalyticsPackage(),
      //     new ReanimatedPackage(),
      //     new RNGestureHandlerPackage(),
      //     new RNScreensPackage(),
      //     new ModuleRegistryAdapter(mModuleRegistryProvider),
      //     new ReactNativeFirebaseAppPackage()
      // );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
