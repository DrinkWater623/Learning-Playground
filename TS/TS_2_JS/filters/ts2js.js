const gulp = require("gulp");
const ts = require("gulp-typescript");

function compile_scripts() {
    return gulp
        .src("scripts/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(
            ts({
                module: "es2020",
                moduleResolution: "node",
                lib: ["es2020", "dom"],
                strict: true,
                target: "es2020",
                noImplicitAny: true,
            })
        )
        .pipe(
            sourcemaps.write("../../_BPDebug", {
                destPath: bpfoldername + "/scripts/",
                sourceRoot: "./../../../scripts/",
            })
        )
        .pipe(gulp.dest("build/behavior_packs/BP/scripts"));
}