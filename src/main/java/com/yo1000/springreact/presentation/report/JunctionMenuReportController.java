package com.yo1000.springreact.presentation.report;

import com.openhtmltopdf.pdfboxout.PdfRendererBuilder;
import com.yo1000.springreact.config.ReportConfig;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/report")
public class JunctionMenuReportController {
    private final TemplateEngine engine;

    private final ReportConfig.ReportProperties reportProps;

    public JunctionMenuReportController(
            TemplateEngine engine,
            ReportConfig.ReportProperties reportProps
    ) {
        this.engine = engine;
        this.reportProps = reportProps;
    }

    @GetMapping(value = "/junctionMenuReport.pdf")
    public ResponseEntity<StreamingResponseBody> get() {
        final String templateName = "junctionMenuReport";

        Context context = new Context();

        context.setVariable("fonts", reportProps.fonts());
        context.setVariable("junctionMenus", List.of(
                createJunctionMenuForSquallEn(),
                createJunctionMenuForSquallJa(),
                createJunctionMenuForRinoaEn(),
                createJunctionMenuForRinoaJa()
        ));

        engine.process(templateName, context);

        StreamingResponseBody body = outputStream -> {
            PdfRendererBuilder builder = new PdfRendererBuilder();
            builder.useFastMode()
                    .useFont(reportProps.fonts().gothic().resource().getFile(), reportProps.fonts().gothic().name())
                    .useFont(reportProps.fonts().gothicMonospace().resource().getFile(), reportProps.fonts().gothicMonospace().name())
                    .withHtmlContent(engine.process(templateName, context), "/thymeleaf")
                    .toStream(outputStream)
                    .run();
        };

        return ResponseEntity
                .status(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_PDF)
                .body(body);
    }

    private JunctionMenu createJunctionMenuForSquallEn() {
        return new JunctionMenu(
                new Labels(
                        "Junction",
                        List.of("Junction", "Off", "Auto", "Ability"),
                        "Junctioning",
                        "LV",
                        "HP",
                        "Current EXP",
                        "Next LEVEL",
                        "HP",
                        "Str",
                        "Vit",
                        "Mag",
                        "Spr",
                        "Spd",
                        "Eva",
                        "Hit",
                        "Luck"
                ),
                new Status(
                        "Squall",
                        100,
                        4_187 + 4_800,
                        4_187 + 4_800,
                        99_000,
                        0,
                        new Commands("Attack", "Magic", "Draw", "GF"),
                        new Junction(
                                "Full-life", // HP
                                Optional.of(4_187 + 4_800).map(v -> v <= 9999 ? v : 9999).get(),
                                "Meteor", // Str
                                Optional.of(58 + 75).map(v -> v <= 255 ? v : 255).get(),
                                "Meltdown", // Vit
                                Optional.of(41 + 80).map(v -> v <= 255 ? v : 255).get(),
                                "Pain", // Mag
                                Optional.of(45 + 60).map(v -> v <= 255 ? v : 255).get(),
                                "Reflect", // Spr
                                Optional.of(36 + 72).map(v -> v <= 255 ? v : 255).get(),
                                "Triple", // Spd
                                Optional.of(37 + 70).map(v -> v <= 255 ? v : 255).get(),
                                "Ultima", // Eva
                                Optional.of(3 + 60).map(v -> v <= 255 ? v : 255).get(),
                                "Double", // Hit
                                Optional.of(255 + 40).map(v -> v <= 255 ? v : 255).get(),
                                "Aura", // Luck
                                Optional.of(22 + 40).map(v -> v <= 255 ? v : 255).get()
                        )
                )
        );
    }

    private JunctionMenu createJunctionMenuForSquallJa() {
        return new JunctionMenu(
                new Labels(
                        "ジャンクション",
                        List.of("ジャンクション", "はずす", "さいきょう", "アビリティ"),
                        "ジャンクションします",
                        "Lv",
                        "HP",
                        "げんざいのEXP",
                        "つぎのLEVELまで",
                        "HP",
                        "力",
                        "体力",
                        "魔力",
                        "精神",
                        "早さ",
                        "回避",
                        "命中",
                        "運"
                ),
                new Status(
                        "スコール",
                        100,
                        4_187 + 4_800,
                        4_187 + 4_800,
                        99_000,
                        0,
                        new Commands("たたかう", "まほう", "ドロー", "Ｇ．Ｆ．"),
                        new Junction(
                                "アレイズ", // HP
                                Optional.of(4_187 + 4_800).map(v -> v <= 9999 ? v : 9999).get(),
                                "メテオ", // Str
                                Optional.of(58 + 75).map(v -> v <= 255 ? v : 255).get(),
                                "メルトン", // Vit
                                Optional.of(41 + 80).map(v -> v <= 255 ? v : 255).get(),
                                "ペイン", // Mag
                                Optional.of(45 + 60).map(v -> v <= 255 ? v : 255).get(),
                                "リフレク", // Spr
                                Optional.of(36 + 72).map(v -> v <= 255 ? v : 255).get(),
                                "トリプル", // Spd
                                Optional.of(37 + 70).map(v -> v <= 255 ? v : 255).get(),
                                "アルテマ", // Eva
                                Optional.of(3 + 60).map(v -> v <= 255 ? v : 255).get(),
                                "ダブル", // Hit
                                Optional.of(255 + 40).map(v -> v <= 255 ? v : 255).get(),
                                "オーラ", // Luck
                                Optional.of(22 + 40).map(v -> v <= 255 ? v : 255).get()
                        )
                )
        );
    }

    private JunctionMenu createJunctionMenuForRinoaEn() {
        return new JunctionMenu(
                new Labels(
                        "Junction",
                        List.of("Junction", "Off", "Auto", "Ability"),
                        "Junctioning",
                        "LV",
                        "HP",
                        "Current EXP",
                        "Next LEVEL",
                        "HP",
                        "Str",
                        "Vit",
                        "Mag",
                        "Spr",
                        "Spd",
                        "Eva",
                        "Hit",
                        "Luck"
                ),
                new Status(
                        "Rinoa",
                        100,
                        4_181 + 4_800,
                        4_181 + 4_800,
                        99_000,
                        0,
                        new Commands("Attack", "Magic", "Draw", "GF"),
                        new Junction(
                                "Full-life", // HP
                                Optional.of(4_181 + 4_800).map(v -> v <= 9999 ? v : 9999).get(),
                                "Meteor", // Str
                                Optional.of(78 + 75).map(v -> v <= 255 ? v : 255).get(),
                                "Meltdown", // Vit
                                Optional.of(31 + 80).map(v -> v <= 255 ? v : 255).get(),
                                "Pain", // Mag
                                Optional.of(63 + 60).map(v -> v <= 255 ? v : 255).get(),
                                "Reflect", // Spr
                                Optional.of(39 + 72).map(v -> v <= 255 ? v : 255).get(),
                                "Triple", // Spd
                                Optional.of(36 + 70).map(v -> v <= 255 ? v : 255).get(),
                                "Ultima", // Eva
                                Optional.of(3 + 60).map(v -> v <= 255 ? v : 255).get(),
                                "Double", // Hit
                                Optional.of(99 + 40).map(v -> v <= 255 ? v : 255).get(),
                                "Aura", // Luck
                                Optional.of(22 + 40).map(v -> v <= 255 ? v : 255).get()
                        )
                )
        );
    }

    private JunctionMenu createJunctionMenuForRinoaJa() {
        return new JunctionMenu(
                new Labels(
                        "ジャンクション",
                        List.of("ジャンクション", "はずす", "さいきょう", "アビリティ"),
                        "ジャンクションします",
                        "Lv",
                        "HP",
                        "げんざいのEXP",
                        "つぎのLEVELまで",
                        "HP",
                        "力",
                        "体力",
                        "魔力",
                        "精神",
                        "早さ",
                        "回避",
                        "命中",
                        "運"
                ),
                new Status(
                        "リノア",
                        100,
                        4_181 + 4_800,
                        4_181 + 4_800,
                        99_000,
                        0,
                        new Commands("たたかう", "まほう", "ドロー", "Ｇ．Ｆ．"),
                        new Junction(
                                "アレイズ", // HP
                                Optional.of(4_181 + 4_800).map(v -> v <= 9999 ? v : 9999).get(),
                                "メテオ", // Str
                                Optional.of(78 + 75).map(v -> v <= 255 ? v : 255).get(),
                                "メルトン", // Vit
                                Optional.of(31 + 80).map(v -> v <= 255 ? v : 255).get(),
                                "ペイン", // Mag
                                Optional.of(63 + 60).map(v -> v <= 255 ? v : 255).get(),
                                "リフレク", // Spr
                                Optional.of(39 + 72).map(v -> v <= 255 ? v : 255).get(),
                                "トリプル", // Spd
                                Optional.of(36 + 70).map(v -> v <= 255 ? v : 255).get(),
                                "アルテマ", // Eva
                                Optional.of(3 + 60).map(v -> v <= 255 ? v : 255).get(),
                                "ダブル", // Hit
                                Optional.of(99 + 40).map(v -> v <= 255 ? v : 255).get(),
                                "オーラ", // Luck
                                Optional.of(22 + 40).map(v -> v <= 255 ? v : 255).get()
                        )
                )
        );
    }

    private record Commands(
            String command1,
            String command2,
            String command3,
            String command4
    ) {}

    private record JunctionMenu(
            Labels labels,
            Status status
    ) {}

    private record Labels(
            String title,
            List<String> notices,
            String help,
            String level,
            String hp,
            String currentExp,
            String nextLevel,
            String junctionHp,
            String junctionStr,
            String junctionVit,
            String junctionMag,
            String junctionSpr,
            String junctionSpd,
            String junctionEva,
            String junctionHit,
            String junctionLuck
    ) {}

    private record Status(
            String name,
            int level,
            int currentHp,
            int maxHp,
            int currentExp,
            int nextLevel,
            Commands commands,
            Junction junction
    ) {}

    private record Junction(
            String hpMagic,
            int hp,
            String strMagic,
            int str,
            String vitMagic,
            int vit,
            String magMagic,
            int mag,
            String sprMagic,
            int spr,
            String spdMagic,
            int spd,
            String evaMagic,
            int eva,
            String hitMagic,
            int hit,
            String luckMagic,
            int luck
    ) {}
}
