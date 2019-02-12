declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class AdaptiveMap {
					public static class: java.lang.Class<com.googlecode.leptonica.android.AdaptiveMap>;
					public static DEFAULT_TILE_WIDTH: number;
					public static DEFAULT_TILE_HEIGHT: number;
					public static DEFAULT_MIN_COUNT: number;
					public static DEFAULT_X_SMOOTH_SIZE: number;
					public static DEFAULT_Y_SMOOTH_SIZE: number;
					public static backgroundNormMorph(param0: com.googlecode.leptonica.android.Pix, param1: number, param2: number, param3: number): com.googlecode.leptonica.android.Pix;
					public static pixContrastNorm(param0: com.googlecode.leptonica.android.Pix, param1: number, param2: number, param3: number, param4: number, param5: number): com.googlecode.leptonica.android.Pix;
					public constructor();
					public static backgroundNormMorph(param0: com.googlecode.leptonica.android.Pix): com.googlecode.leptonica.android.Pix;
					public static pixContrastNorm(param0: com.googlecode.leptonica.android.Pix): com.googlecode.leptonica.android.Pix;
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class Binarize {
					public static class: java.lang.Class<com.googlecode.leptonica.android.Binarize>;
					public static OTSU_SIZE_X: number;
					public static OTSU_SIZE_Y: number;
					public static OTSU_SMOOTH_X: number;
					public static OTSU_SMOOTH_Y: number;
					public static OTSU_SCORE_FRACTION: number;
					public static SAUVOLA_DEFAULT_WINDOW_HALFWIDTH: number;
					public static SAUVOLA_DEFAULT_REDUCTION_FACTOR: number;
					public static SAUVOLA_DEFAULT_NUM_TILES_X: number;
					public static SAUVOLA_DEFAULT_NUM_TILES_Y: number;
					public static sauvolaBinarizeTiled(param0: com.googlecode.leptonica.android.Pix): com.googlecode.leptonica.android.Pix;
					public constructor();
					public static otsuAdaptiveThreshold(param0: com.googlecode.leptonica.android.Pix): com.googlecode.leptonica.android.Pix;
					public static sauvolaBinarizeTiled(param0: com.googlecode.leptonica.android.Pix, param1: number, param2: number, param3: number, param4: number): com.googlecode.leptonica.android.Pix;
					public static otsuAdaptiveThreshold(param0: com.googlecode.leptonica.android.Pix, param1: number, param2: number, param3: number, param4: number, param5: number): com.googlecode.leptonica.android.Pix;
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class Box {
					public static class: java.lang.Class<com.googlecode.leptonica.android.Box>;
					public static INDEX_X: number;
					public static INDEX_Y: number;
					public static INDEX_W: number;
					public static INDEX_H: number;
					public constructor(param0: number, param1: number, param2: number, param3: number);
					public getGeometry(): native.Array<number>;
					public recycle(): void;
					public getX(): number;
					public getHeight(): number;
					public finalize(): void;
					public getWidth(): number;
					public getY(): number;
					public getGeometry(param0: native.Array<number>): boolean;
					public getRect(): android.graphics.Rect;
					public getNativeBox(): number;
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class Boxa {
					public static class: java.lang.Class<com.googlecode.leptonica.android.Boxa>;
					public getNativeBoxa(): number;
					public getCount(): number;
					public recycle(): void;
					public getRect(param0: number): android.graphics.Rect;
					public finalize(): void;
					public getGeometry(param0: number): native.Array<number>;
					public getGeometry(param0: number, param1: native.Array<number>): boolean;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class Clip {
					public static class: java.lang.Class<com.googlecode.leptonica.android.Clip>;
					public static clipRectangle(param0: com.googlecode.leptonica.android.Pix, param1: com.googlecode.leptonica.android.Box): com.googlecode.leptonica.android.Pix;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class Constants {
					public static class: java.lang.Class<com.googlecode.leptonica.android.Constants>;
					public static L_INSERT: number;
					public static L_COPY: number;
					public static L_CLONE: number;
					public static L_COPY_CLONE: number;
					public static L_SORT_INCREASING: number;
					public static L_SORT_DECREASING: number;
					public static L_SORT_BY_X: number;
					public static L_SORT_BY_Y: number;
					public static L_SORT_BY_WIDTH: number;
					public static L_SORT_BY_HEIGHT: number;
					public static L_SORT_BY_MIN_DIMENSION: number;
					public static L_SORT_BY_MAX_DIMENSION: number;
					public static L_SORT_BY_PERIMETER: number;
					public static L_SORT_BY_AREA: number;
					public static L_SORT_BY_ASPECT_RATIO: number;
					public static IFF_UNKNOWN: number;
					public static IFF_BMP: number;
					public static IFF_JFIF_JPEG: number;
					public static IFF_PNG: number;
					public static IFF_TIFF: number;
					public static IFF_TIFF_PACKBITS: number;
					public static IFF_TIFF_RLE: number;
					public static IFF_TIFF_G3: number;
					public static IFF_TIFF_G4: number;
					public static IFF_TIFF_LZW: number;
					public static IFF_TIFF_ZIP: number;
					public static IFF_PNM: number;
					public static IFF_PS: number;
					public static IFF_GIF: number;
					public static IFF_JP2: number;
					public static IFF_DEFAULT: number;
					public static IFF_SPIX: number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class Convert {
					public static class: java.lang.Class<com.googlecode.leptonica.android.Convert>;
					public static convertTo8(param0: com.googlecode.leptonica.android.Pix): com.googlecode.leptonica.android.Pix;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class Edge {
					public static class: java.lang.Class<com.googlecode.leptonica.android.Edge>;
					public static L_HORIZONTAL_EDGES: number;
					public static L_VERTICAL_EDGES: number;
					public static L_ALL_EDGES: number;
					public constructor();
					public static pixSobelEdgeFilter(param0: com.googlecode.leptonica.android.Pix, param1: number): com.googlecode.leptonica.android.Pix;
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class Enhance {
					public static class: java.lang.Class<com.googlecode.leptonica.android.Enhance>;
					public static DEFAULT_UNSHARP_HALFWIDTH: number;
					public static DEFAULT_UNSHARP_FRACTION: number;
					public constructor();
					public static unsharpMasking(param0: com.googlecode.leptonica.android.Pix, param1: number, param2: number): com.googlecode.leptonica.android.Pix;
					public static unsharpMasking(param0: com.googlecode.leptonica.android.Pix): com.googlecode.leptonica.android.Pix;
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class GrayQuant {
					public static class: java.lang.Class<com.googlecode.leptonica.android.GrayQuant>;
					public static pixThresholdToBinary(param0: com.googlecode.leptonica.android.Pix, param1: number): com.googlecode.leptonica.android.Pix;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class JpegIO {
					public static class: java.lang.Class<com.googlecode.leptonica.android.JpegIO>;
					public static DEFAULT_QUALITY: number;
					public static DEFAULT_PROGRESSIVE: boolean;
					public static compressToJpeg(param0: com.googlecode.leptonica.android.Pix, param1: number, param2: boolean): native.Array<number>;
					public static compressToJpeg(param0: com.googlecode.leptonica.android.Pix): native.Array<number>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class MorphApp {
					public static class: java.lang.Class<com.googlecode.leptonica.android.MorphApp>;
					public static L_TOPHAT_WHITE: number;
					public static L_TOPHAT_BLACK: number;
					public static DEFAULT_WIDTH: number;
					public static DEFAULT_HEIGHT: number;
					public static pixFastTophatWhite(param0: com.googlecode.leptonica.android.Pix): com.googlecode.leptonica.android.Pix;
					public static pixFastTophat(param0: com.googlecode.leptonica.android.Pix, param1: number, param2: number, param3: number): com.googlecode.leptonica.android.Pix;
					public static pixTophat(param0: com.googlecode.leptonica.android.Pix, param1: number, param2: number, param3: number): com.googlecode.leptonica.android.Pix;
					public constructor();
					public static pixFastTophatBlack(param0: com.googlecode.leptonica.android.Pix): com.googlecode.leptonica.android.Pix;
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class Pix {
					public static class: java.lang.Class<com.googlecode.leptonica.android.Pix>;
					public static INDEX_W: number;
					public static INDEX_H: number;
					public static INDEX_D: number;
					public invert(): boolean;
					public getRefCount(): number;
					public setPixel(param0: number, param1: number, param2: number): void;
					public getNativePix(): number;
					public recycle(): void;
					public getHeight(): number;
					public getPixel(param0: number, param1: number): number;
					public getWidth(): number;
					public clone(): com.googlecode.leptonica.android.Pix;
					public getRect(): android.graphics.Rect;
					public getDimensions(param0: native.Array<number>): boolean;
					public getDimensions(): native.Array<number>;
					public copy(): com.googlecode.leptonica.android.Pix;
					public constructor(param0: number, param1: number, param2: number);
					public getData(): native.Array<number>;
					public getDepth(): number;
					public static createFromPix(param0: native.Array<number>, param1: number, param2: number, param3: number): com.googlecode.leptonica.android.Pix;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class Pixa extends java.lang.Iterable<com.googlecode.leptonica.android.Pix> {
					public static class: java.lang.Class<com.googlecode.leptonica.android.Pixa>;
					public getBoxRect(param0: number): android.graphics.Rect;
					public iterator(): java.util.Iterator<com.googlecode.leptonica.android.Pix>;
					public recycle(): void;
					public getBoxGeometry(param0: number): native.Array<number>;
					public finalize(): void;
					public getBox(param0: number): com.googlecode.leptonica.android.Box;
					public writeToFileRandomCmap(param0: java.io.File): boolean;
					public size(): number;
					public addPix(param0: com.googlecode.leptonica.android.Pix, param1: number): void;
					public join(param0: com.googlecode.leptonica.android.Pixa): boolean;
					public getPix(param0: number): com.googlecode.leptonica.android.Pix;
					public getNativePixa(): number;
					public getBoxGeometry(param0: number, param1: native.Array<number>): boolean;
					public constructor(param0: number, param1: number, param2: number);
					public copy(): com.googlecode.leptonica.android.Pixa;
					public add(param0: com.googlecode.leptonica.android.Pix, param1: com.googlecode.leptonica.android.Box, param2: number): void;
					public addBox(param0: com.googlecode.leptonica.android.Box, param1: number): void;
					public getHeight(): number;
					public getBoxRects(): java.util.ArrayList<android.graphics.Rect>;
					public sort(param0: number, param1: number): com.googlecode.leptonica.android.Pixa;
					public getWidth(): number;
					public getRect(): android.graphics.Rect;
					public replacePix(param0: number, param1: com.googlecode.leptonica.android.Pix, param2: com.googlecode.leptonica.android.Box): void;
					public static createPixa(param0: number): com.googlecode.leptonica.android.Pixa;
					public static createPixa(param0: number, param1: number, param2: number): com.googlecode.leptonica.android.Pixa;
					public mergeAndReplacePix(param0: number, param1: number): void;
				}
				export module Pixa {
					export class PixIterator extends java.util.Iterator<com.googlecode.leptonica.android.Pix> {
						public static class: java.lang.Class<com.googlecode.leptonica.android.Pixa.PixIterator>;
						public next(): com.googlecode.leptonica.android.Pix;
						public hasNext(): boolean;
						public remove(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class ReadFile {
					public static class: java.lang.Class<com.googlecode.leptonica.android.ReadFile>;
					public constructor();
					public static readMem(param0: native.Array<number>): com.googlecode.leptonica.android.Pix;
					public static replaceBytes8(param0: com.googlecode.leptonica.android.Pix, param1: native.Array<number>, param2: number, param3: number): boolean;
					public static readBitmap(param0: android.graphics.Bitmap): com.googlecode.leptonica.android.Pix;
					public static readFile(param0: java.io.File): com.googlecode.leptonica.android.Pix;
					public static readBytes8(param0: native.Array<number>, param1: number, param2: number): com.googlecode.leptonica.android.Pix;
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class Rotate {
					public static class: java.lang.Class<com.googlecode.leptonica.android.Rotate>;
					public static ROTATE_QUALITY: boolean;
					public static rotate(param0: com.googlecode.leptonica.android.Pix, param1: number): com.googlecode.leptonica.android.Pix;
					public static rotateOrth(param0: com.googlecode.leptonica.android.Pix, param1: number): com.googlecode.leptonica.android.Pix;
					public constructor();
					public static rotate(param0: com.googlecode.leptonica.android.Pix, param1: number, param2: boolean, param3: boolean): com.googlecode.leptonica.android.Pix;
					public static rotate(param0: com.googlecode.leptonica.android.Pix, param1: number, param2: boolean): com.googlecode.leptonica.android.Pix;
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class Scale {
					public static class: java.lang.Class<com.googlecode.leptonica.android.Scale>;
					public static scaleToSize(param0: com.googlecode.leptonica.android.Pix, param1: number, param2: number, param3: com.googlecode.leptonica.android.Scale.ScaleType): com.googlecode.leptonica.android.Pix;
					public static scaleWithoutSharpening(param0: com.googlecode.leptonica.android.Pix, param1: number): com.googlecode.leptonica.android.Pix;
					public constructor();
					public static scale(param0: com.googlecode.leptonica.android.Pix, param1: number, param2: number): com.googlecode.leptonica.android.Pix;
					public static scale(param0: com.googlecode.leptonica.android.Pix, param1: number): com.googlecode.leptonica.android.Pix;
				}
				export module Scale {
					export class ScaleType {
						public static class: java.lang.Class<com.googlecode.leptonica.android.Scale.ScaleType>;
						public static FILL: com.googlecode.leptonica.android.Scale.ScaleType;
						public static FIT: com.googlecode.leptonica.android.Scale.ScaleType;
						public static FIT_SHRINK: com.googlecode.leptonica.android.Scale.ScaleType;
						public static values(): native.Array<com.googlecode.leptonica.android.Scale.ScaleType>;
						public static valueOf(param0: string): com.googlecode.leptonica.android.Scale.ScaleType;
					}
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class Skew {
					public static class: java.lang.Class<com.googlecode.leptonica.android.Skew>;
					public static SWEEP_RANGE: number;
					public static SWEEP_DELTA: number;
					public static SWEEP_REDUCTION: number;
					public static SEARCH_REDUCTION: number;
					public static SEARCH_MIN_DELTA: number;
					public static findSkew(param0: com.googlecode.leptonica.android.Pix): number;
					public static findSkew(param0: com.googlecode.leptonica.android.Pix, param1: number, param2: number, param3: number, param4: number, param5: number): number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module leptonica {
			export module android {
				export class WriteFile {
					public static class: java.lang.Class<com.googlecode.leptonica.android.WriteFile>;
					public static writeImpliedFormat(param0: com.googlecode.leptonica.android.Pix, param1: java.io.File): boolean;
					public constructor();
					public static writeBytes8(param0: com.googlecode.leptonica.android.Pix, param1: native.Array<number>): number;
					public static writeBytes8(param0: com.googlecode.leptonica.android.Pix): native.Array<number>;
					public static writeBitmap(param0: com.googlecode.leptonica.android.Pix): android.graphics.Bitmap;
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module tesseract {
			export module android {
				export class BuildConfig {
					public static class: java.lang.Class<com.googlecode.tesseract.android.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module tesseract {
			export module android {
				export class PageIterator {
					public static class: java.lang.Class<com.googlecode.tesseract.android.PageIterator>;
					public getBoundingRect(param0: number): android.graphics.Rect;
					public begin(): void;
					public getBoundingBox(param0: number): native.Array<number>;
					public next(param0: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module tesseract {
			export module android {
				export class ResultIterator extends com.googlecode.tesseract.android.PageIterator {
					public static class: java.lang.Class<com.googlecode.tesseract.android.ResultIterator>;
					public delete(): void;
					public confidence(param0: number): number;
					public getChoicesAndConfidence(param0: number): java.util.List<android.util.Pair<string,java.lang.Double>>;
					public getUTF8Text(param0: number): string;
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module tesseract {
			export module android {
				export class TessBaseAPI {
					public static class: java.lang.Class<com.googlecode.tesseract.android.TessBaseAPI>;
					public static VAR_CHAR_WHITELIST: string;
					public static VAR_CHAR_BLACKLIST: string;
					public static VAR_SAVE_BLOB_CHOICES: string;
					public static VAR_TRUE: string;
					public static VAR_FALSE: string;
					public static OEM_TESSERACT_ONLY: number;
					public static OEM_CUBE_ONLY: number;
					public static OEM_TESSERACT_CUBE_COMBINED: number;
					public static OEM_DEFAULT: number;
					public setImage(param0: android.graphics.Bitmap): void;
					public getVersion(): string;
					public beginDocument(param0: com.googlecode.tesseract.android.TessPdfRenderer, param1: string): boolean;
					public getHOCRText(param0: number): string;
					public getTextlines(): com.googlecode.leptonica.android.Pixa;
					public setRectangle(param0: android.graphics.Rect): void;
					public getWords(): com.googlecode.leptonica.android.Pixa;
					public setDebug(param0: boolean): void;
					public getRegions(): com.googlecode.leptonica.android.Pixa;
					public getBoxText(param0: number): string;
					public getResultIterator(): com.googlecode.tesseract.android.ResultIterator;
					public endDocument(param0: com.googlecode.tesseract.android.TessPdfRenderer): boolean;
					public end(): void;
					public setInputName(param0: string): void;
					public getStrips(): com.googlecode.leptonica.android.Pixa;
					public init(param0: string, param1: string): boolean;
					public setVariable(param0: string, param1: string): boolean;
					public constructor();
					public getConnectedComponents(): com.googlecode.leptonica.android.Pixa;
					public beginDocument(param0: com.googlecode.tesseract.android.TessPdfRenderer): boolean;
					public clear(): void;
					public getUTF8Text(): string;
					public getPageSegMode(): number;
					public onProgressValues(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
					public setImage(param0: java.io.File): void;
					public setImage(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number): void;
					public wordConfidences(): native.Array<number>;
					public constructor(param0: com.googlecode.tesseract.android.TessBaseAPI.ProgressNotifier);
					public meanConfidence(): number;
					public setRectangle(param0: number, param1: number, param2: number, param3: number): void;
					public getInitLanguagesAsString(): string;
					public getThresholdedImage(): com.googlecode.leptonica.android.Pix;
					public setOutputName(param0: string): void;
					public addPageToDocument(param0: com.googlecode.leptonica.android.Pix, param1: string, param2: com.googlecode.tesseract.android.TessPdfRenderer): boolean;
					public setPageSegMode(param0: number): void;
					public stop(): void;
					public readConfigFile(param0: string): void;
					public init(param0: string, param1: string, param2: number): boolean;
					public setImage(param0: com.googlecode.leptonica.android.Pix): void;
				}
				export module TessBaseAPI {
					export class PageIteratorLevel {
						public static class: java.lang.Class<com.googlecode.tesseract.android.TessBaseAPI.PageIteratorLevel>;
						public static RIL_BLOCK: number;
						public static RIL_PARA: number;
						public static RIL_TEXTLINE: number;
						public static RIL_WORD: number;
						public static RIL_SYMBOL: number;
						public constructor();
					}
					export class PageSegMode {
						public static class: java.lang.Class<com.googlecode.tesseract.android.TessBaseAPI.PageSegMode>;
						public static PSM_OSD_ONLY: number;
						public static PSM_AUTO_OSD: number;
						public static PSM_AUTO_ONLY: number;
						public static PSM_AUTO: number;
						public static PSM_SINGLE_COLUMN: number;
						public static PSM_SINGLE_BLOCK_VERT_TEXT: number;
						public static PSM_SINGLE_BLOCK: number;
						public static PSM_SINGLE_LINE: number;
						public static PSM_SINGLE_WORD: number;
						public static PSM_CIRCLE_WORD: number;
						public static PSM_SINGLE_CHAR: number;
						public static PSM_SPARSE_TEXT: number;
						public static PSM_SPARSE_TEXT_OSD: number;
						public static PSM_COUNT: number;
						public constructor();
					}
					export class ProgressNotifier {
						public static class: java.lang.Class<com.googlecode.tesseract.android.TessBaseAPI.ProgressNotifier>;
						/**
						 * Constructs a new instance of the com.googlecode.tesseract.android.TessBaseAPI$ProgressNotifier interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onProgressValues(param0: com.googlecode.tesseract.android.TessBaseAPI.ProgressValues): void;
						});
						public constructor();
						public onProgressValues(param0: com.googlecode.tesseract.android.TessBaseAPI.ProgressValues): void;
					}
					export class ProgressValues {
						public static class: java.lang.Class<com.googlecode.tesseract.android.TessBaseAPI.ProgressValues>;
						public constructor(param0: com.googlecode.tesseract.android.TessBaseAPI, param1: number, param2: android.graphics.Rect, param3: android.graphics.Rect);
						public getCurrentRect(): android.graphics.Rect;
						public getCurrentWordRect(): android.graphics.Rect;
						public getPercent(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module googlecode {
		export module tesseract {
			export module android {
				export class TessPdfRenderer {
					public static class: java.lang.Class<com.googlecode.tesseract.android.TessPdfRenderer>;
					public recycle(): void;
					public getNativePdfRenderer(): number;
					public constructor(param0: com.googlecode.tesseract.android.TessBaseAPI, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class BuildConfig {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class CaptureActivity implements com.mercuriete.mrz.reader.camera.ShutterButton.OnShutterButtonListener {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.CaptureActivity>;
					public static DEFAULT_SOURCE_LANGUAGE_CODE: string;
					public static DEFAULT_TARGET_LANGUAGE_CODE: string;
					public static DEFAULT_TRANSLATOR: string;
					public static DEFAULT_OCR_ENGINE_MODE: string;
					public static DEFAULT_PAGE_SEGMENTATION_MODE: string;
					public static DEFAULT_TOGGLE_AUTO_FOCUS: boolean;
					public static DEFAULT_DISABLE_CONTINUOUS_FOCUS: boolean;
					public static DEFAULT_TOGGLE_BEEP: boolean;
					public static DEFAULT_TOGGLE_CONTINUOUS: boolean;
					public static DEFAULT_TOGGLE_REVERSED_IMAGE: boolean;
					public static DEFAULT_TOGGLE_TRANSLATION: boolean;
					public static DEFAULT_TOGGLE_LIGHT: boolean;
					public static MRZ_RESULT: string;
					public static MRZ_PICTURE_PATH: string;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public onShutterButtonFocus(param0: com.mercuriete.mrz.reader.camera.ShutterButton, param1: boolean): void;
					public onCreate(param0: android.os.Bundle): void;
					public onCreateOptionsMenu(param0: android.view.Menu): boolean;
					public surfaceCreated(param0: android.view.SurfaceHolder): void;
					public onDestroy(): void;
					public onResume(): void;
					public surfaceChanged(param0: android.view.SurfaceHolder, param1: number, param2: number, param3: number): void;
					public onShutterButtonClick(param0: com.mercuriete.mrz.reader.camera.ShutterButton): void;
					public surfaceDestroyed(param0: android.view.SurfaceHolder): void;
					public constructor();
					public onContextItemSelected(param0: android.view.MenuItem): boolean;
					public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					public onPause(): void;
					public onOptionsItemSelected(param0: android.view.MenuItem): boolean;
					public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class CaptureActivityHandler {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.CaptureActivityHandler>;
					public handleMessage(param0: android.os.Message): void;
				}
				export module CaptureActivityHandler {
					export class State {
						public static class: java.lang.Class<com.mercuriete.mrz.reader.CaptureActivityHandler.State>;
						public static PREVIEW: com.mercuriete.mrz.reader.CaptureActivityHandler.State;
						public static PREVIEW_PAUSED: com.mercuriete.mrz.reader.CaptureActivityHandler.State;
						public static CONTINUOUS: com.mercuriete.mrz.reader.CaptureActivityHandler.State;
						public static CONTINUOUS_PAUSED: com.mercuriete.mrz.reader.CaptureActivityHandler.State;
						public static SUCCESS: com.mercuriete.mrz.reader.CaptureActivityHandler.State;
						public static DONE: com.mercuriete.mrz.reader.CaptureActivityHandler.State;
						public static valueOf(param0: string): com.mercuriete.mrz.reader.CaptureActivityHandler.State;
						public static values(): native.Array<com.mercuriete.mrz.reader.CaptureActivityHandler.State>;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class DecodeHandler {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.DecodeHandler>;
					public handleMessage(param0: android.os.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class DecodeThread {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.DecodeThread>;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class FinishListener {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.FinishListener>;
					public onCancel(param0: android.content.DialogInterface): void;
					public onClick(param0: android.content.DialogInterface, param1: number): void;
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class HelpActivity {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.HelpActivity>;
					public static REQUESTED_PAGE_KEY: string;
					public static DEFAULT_PAGE: string;
					public static ABOUT_PAGE: string;
					public static TERMS_PAGE: string;
					public static WHATS_NEW_PAGE: string;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public onSaveInstanceState(param0: android.os.Bundle): void;
					public onCreate(param0: android.os.Bundle): void;
					public constructor();
				}
				export module HelpActivity {
					export class HelpClient {
						public static class: java.lang.Class<com.mercuriete.mrz.reader.HelpActivity.HelpClient>;
						public constructor(param0: com.mercuriete.mrz.reader.HelpActivity, param1: android.app.Activity);
						public onPageFinished(param0: android.webkit.WebView, param1: string): void;
						public shouldOverrideUrlLoading(param0: android.webkit.WebView, param1: string): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export abstract class LuminanceSource {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.LuminanceSource>;
					public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
					public getMatrix(): native.Array<number>;
					public getHeight(): number;
					public isCropSupported(): boolean;
					public getWidth(): number;
					public isRotateSupported(): boolean;
					public constructor(param0: number, param1: number);
					public crop(param0: number, param1: number, param2: number, param3: number): com.mercuriete.mrz.reader.LuminanceSource;
					public rotateCounterClockwise(): com.mercuriete.mrz.reader.LuminanceSource;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class OcrCharacterHelper {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.OcrCharacterHelper>;
					public static KEY_CHARACTER_BLACKLIST_AFRIKAANS: string;
					public static KEY_CHARACTER_BLACKLIST_ALBANIAN: string;
					public static KEY_CHARACTER_BLACKLIST_ARABIC: string;
					public static KEY_CHARACTER_BLACKLIST_AZERI: string;
					public static KEY_CHARACTER_BLACKLIST_BASQUE: string;
					public static KEY_CHARACTER_BLACKLIST_BELARUSIAN: string;
					public static KEY_CHARACTER_BLACKLIST_BENGALI: string;
					public static KEY_CHARACTER_BLACKLIST_BULGARIAN: string;
					public static KEY_CHARACTER_BLACKLIST_CATALAN: string;
					public static KEY_CHARACTER_BLACKLIST_CHINESE_SIMPLIFIED: string;
					public static KEY_CHARACTER_BLACKLIST_CHINESE_TRADITIONAL: string;
					public static KEY_CHARACTER_BLACKLIST_CROATIAN: string;
					public static KEY_CHARACTER_BLACKLIST_CZECH: string;
					public static KEY_CHARACTER_BLACKLIST_DANISH: string;
					public static KEY_CHARACTER_BLACKLIST_DUTCH: string;
					public static KEY_CHARACTER_BLACKLIST_ENGLISH: string;
					public static KEY_CHARACTER_BLACKLIST_ESTONIAN: string;
					public static KEY_CHARACTER_BLACKLIST_FINNISH: string;
					public static KEY_CHARACTER_BLACKLIST_FRENCH: string;
					public static KEY_CHARACTER_BLACKLIST_GALICIAN: string;
					public static KEY_CHARACTER_BLACKLIST_GERMAN: string;
					public static KEY_CHARACTER_BLACKLIST_GREEK: string;
					public static KEY_CHARACTER_BLACKLIST_HEBREW: string;
					public static KEY_CHARACTER_BLACKLIST_HINDI: string;
					public static KEY_CHARACTER_BLACKLIST_HUNGARIAN: string;
					public static KEY_CHARACTER_BLACKLIST_ICELANDIC: string;
					public static KEY_CHARACTER_BLACKLIST_INDONESIAN: string;
					public static KEY_CHARACTER_BLACKLIST_ITALIAN: string;
					public static KEY_CHARACTER_BLACKLIST_JAPANESE: string;
					public static KEY_CHARACTER_BLACKLIST_KANNADA: string;
					public static KEY_CHARACTER_BLACKLIST_KOREAN: string;
					public static KEY_CHARACTER_BLACKLIST_LATVIAN: string;
					public static KEY_CHARACTER_BLACKLIST_LITHUANIAN: string;
					public static KEY_CHARACTER_BLACKLIST_MACEDONIAN: string;
					public static KEY_CHARACTER_BLACKLIST_MALAY: string;
					public static KEY_CHARACTER_BLACKLIST_MALAYALAM: string;
					public static KEY_CHARACTER_BLACKLIST_MALTESE: string;
					public static KEY_CHARACTER_BLACKLIST_NORWEGIAN: string;
					public static KEY_CHARACTER_BLACKLIST_POLISH: string;
					public static KEY_CHARACTER_BLACKLIST_PORTUGUESE: string;
					public static KEY_CHARACTER_BLACKLIST_ROMANIAN: string;
					public static KEY_CHARACTER_BLACKLIST_RUSSIAN: string;
					public static KEY_CHARACTER_BLACKLIST_SERBIAN: string;
					public static KEY_CHARACTER_BLACKLIST_SLOVAK: string;
					public static KEY_CHARACTER_BLACKLIST_SLOVENIAN: string;
					public static KEY_CHARACTER_BLACKLIST_SPANISH: string;
					public static KEY_CHARACTER_BLACKLIST_SWAHILI: string;
					public static KEY_CHARACTER_BLACKLIST_SWEDISH: string;
					public static KEY_CHARACTER_BLACKLIST_TAGALOG: string;
					public static KEY_CHARACTER_BLACKLIST_TAMIL: string;
					public static KEY_CHARACTER_BLACKLIST_TELUGU: string;
					public static KEY_CHARACTER_BLACKLIST_THAI: string;
					public static KEY_CHARACTER_BLACKLIST_TURKISH: string;
					public static KEY_CHARACTER_BLACKLIST_UKRAINIAN: string;
					public static KEY_CHARACTER_BLACKLIST_VIETNAMESE: string;
					public static KEY_CHARACTER_WHITELIST_AFRIKAANS: string;
					public static KEY_CHARACTER_WHITELIST_ALBANIAN: string;
					public static KEY_CHARACTER_WHITELIST_ARABIC: string;
					public static KEY_CHARACTER_WHITELIST_AZERI: string;
					public static KEY_CHARACTER_WHITELIST_BASQUE: string;
					public static KEY_CHARACTER_WHITELIST_BELARUSIAN: string;
					public static KEY_CHARACTER_WHITELIST_BENGALI: string;
					public static KEY_CHARACTER_WHITELIST_BULGARIAN: string;
					public static KEY_CHARACTER_WHITELIST_CATALAN: string;
					public static KEY_CHARACTER_WHITELIST_CHINESE_SIMPLIFIED: string;
					public static KEY_CHARACTER_WHITELIST_CHINESE_TRADITIONAL: string;
					public static KEY_CHARACTER_WHITELIST_CROATIAN: string;
					public static KEY_CHARACTER_WHITELIST_CZECH: string;
					public static KEY_CHARACTER_WHITELIST_DANISH: string;
					public static KEY_CHARACTER_WHITELIST_DUTCH: string;
					public static KEY_CHARACTER_WHITELIST_ENGLISH: string;
					public static KEY_CHARACTER_WHITELIST_ESTONIAN: string;
					public static KEY_CHARACTER_WHITELIST_FINNISH: string;
					public static KEY_CHARACTER_WHITELIST_FRENCH: string;
					public static KEY_CHARACTER_WHITELIST_GALICIAN: string;
					public static KEY_CHARACTER_WHITELIST_GERMAN: string;
					public static KEY_CHARACTER_WHITELIST_GREEK: string;
					public static KEY_CHARACTER_WHITELIST_HEBREW: string;
					public static KEY_CHARACTER_WHITELIST_HINDI: string;
					public static KEY_CHARACTER_WHITELIST_HUNGARIAN: string;
					public static KEY_CHARACTER_WHITELIST_ICELANDIC: string;
					public static KEY_CHARACTER_WHITELIST_INDONESIAN: string;
					public static KEY_CHARACTER_WHITELIST_ITALIAN: string;
					public static KEY_CHARACTER_WHITELIST_JAPANESE: string;
					public static KEY_CHARACTER_WHITELIST_KANNADA: string;
					public static KEY_CHARACTER_WHITELIST_KOREAN: string;
					public static KEY_CHARACTER_WHITELIST_LATVIAN: string;
					public static KEY_CHARACTER_WHITELIST_LITHUANIAN: string;
					public static KEY_CHARACTER_WHITELIST_MACEDONIAN: string;
					public static KEY_CHARACTER_WHITELIST_MALAY: string;
					public static KEY_CHARACTER_WHITELIST_MALAYALAM: string;
					public static KEY_CHARACTER_WHITELIST_MALTESE: string;
					public static KEY_CHARACTER_WHITELIST_NORWEGIAN: string;
					public static KEY_CHARACTER_WHITELIST_POLISH: string;
					public static KEY_CHARACTER_WHITELIST_PORTUGUESE: string;
					public static KEY_CHARACTER_WHITELIST_ROMANIAN: string;
					public static KEY_CHARACTER_WHITELIST_RUSSIAN: string;
					public static KEY_CHARACTER_WHITELIST_SERBIAN: string;
					public static KEY_CHARACTER_WHITELIST_SLOVAK: string;
					public static KEY_CHARACTER_WHITELIST_SLOVENIAN: string;
					public static KEY_CHARACTER_WHITELIST_SPANISH: string;
					public static KEY_CHARACTER_WHITELIST_SWAHILI: string;
					public static KEY_CHARACTER_WHITELIST_SWEDISH: string;
					public static KEY_CHARACTER_WHITELIST_TAGALOG: string;
					public static KEY_CHARACTER_WHITELIST_TAMIL: string;
					public static KEY_CHARACTER_WHITELIST_TELUGU: string;
					public static KEY_CHARACTER_WHITELIST_THAI: string;
					public static KEY_CHARACTER_WHITELIST_TURKISH: string;
					public static KEY_CHARACTER_WHITELIST_UKRAINIAN: string;
					public static KEY_CHARACTER_WHITELIST_VIETNAMESE: string;
					public static getDefaultWhitelist(param0: string): string;
					public static setWhitelist(param0: android.content.SharedPreferences, param1: string, param2: string): void;
					public static getDefaultBlacklist(param0: string): string;
					public static getWhitelist(param0: android.content.SharedPreferences, param1: string): string;
					public static getBlacklist(param0: android.content.SharedPreferences, param1: string): string;
					public static setBlacklist(param0: android.content.SharedPreferences, param1: string, param2: string): void;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class OcrInitAsyncTask extends android.os.AsyncTask<string,string,java.lang.Boolean> {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.OcrInitAsyncTask>;
					public onPreExecute(): void;
					public doInBackground(param0: native.Array<string>): java.lang.Boolean;
					public onProgressUpdate(param0: native.Array<string>): void;
					public onPostExecute(param0: java.lang.Boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class OcrRecognizeAsyncTask extends android.os.AsyncTask<java.lang.Void,java.lang.Void,java.lang.Boolean> {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.OcrRecognizeAsyncTask>;
					public doInBackground(param0: native.Array<java.lang.Void>): java.lang.Boolean;
					public onPostExecute(param0: java.lang.Boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class OcrResult {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.OcrResult>;
					public getTextlineBoundingBoxes(): java.util.List<android.graphics.Rect>;
					public setMeanConfidence(param0: number): void;
					public setRecognitionTimeRequired(param0: number): void;
					public getStripBoundingBoxes(): java.util.List<android.graphics.Rect>;
					public toString(): string;
					public setText(param0: string): void;
					public constructor();
					public getWordConfidences(): native.Array<number>;
					public constructor(param0: android.graphics.Bitmap, param1: string, param2: native.Array<number>, param3: number, param4: java.util.List<android.graphics.Rect>, param5: java.util.List<android.graphics.Rect>, param6: java.util.List<android.graphics.Rect>, param7: java.util.List<android.graphics.Rect>, param8: java.util.List<android.graphics.Rect>, param9: number);
					public setTextlineBoundingBoxes(param0: java.util.List<android.graphics.Rect>): void;
					public getRegionBoundingBoxes(): java.util.List<android.graphics.Rect>;
					public getRecognitionTimeRequired(): number;
					public getText(): string;
					public getMeanConfidence(): number;
					public setRegionBoundingBoxes(param0: java.util.List<android.graphics.Rect>): void;
					public setWordBoundingBoxes(param0: java.util.List<android.graphics.Rect>): void;
					public setWordConfidences(param0: native.Array<number>): void;
					public getBitmapDimensions(): android.graphics.Point;
					public getBitmap(): android.graphics.Bitmap;
					public getWordBoundingBoxes(): java.util.List<android.graphics.Rect>;
					public getTimestamp(): number;
					public getCharacterBoundingBoxes(): java.util.List<android.graphics.Rect>;
					public setStripBoundingBoxes(param0: java.util.List<android.graphics.Rect>): void;
					public setCharacterBoundingBoxes(param0: java.util.List<android.graphics.Rect>): void;
					public setBitmap(param0: android.graphics.Bitmap): void;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class OcrResultFailure {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.OcrResultFailure>;
					public toString(): string;
					public getTimestamp(): number;
					public getTimeRequired(): number;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class OcrResultText {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.OcrResultText>;
					public toString(): string;
					public getWordBoundingBoxes(): java.util.List<android.graphics.Rect>;
					public getText(): string;
					public getMeanConfidence(): number;
					public constructor(param0: string, param1: native.Array<number>, param2: number, param3: android.graphics.Point, param4: java.util.List<android.graphics.Rect>, param5: java.util.List<android.graphics.Rect>, param6: java.util.List<android.graphics.Rect>, param7: java.util.List<android.graphics.Rect>, param8: java.util.List<android.graphics.Rect>);
					public getTextlineBoundingBoxes(): java.util.List<android.graphics.Rect>;
					public getWordConfidences(): native.Array<number>;
					public getBitmapDimensions(): android.graphics.Point;
					public getCharacterBoundingBoxes(): java.util.List<android.graphics.Rect>;
					public getRegionBoundingBoxes(): java.util.List<android.graphics.Rect>;
					public getStripBoundingBoxes(): java.util.List<android.graphics.Rect>;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class PlanarYUVLuminanceSource extends com.mercuriete.mrz.reader.LuminanceSource {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.PlanarYUVLuminanceSource>;
					public getRow(param0: number, param1: native.Array<number>): native.Array<number>;
					public getMatrix(): native.Array<number>;
					public isCropSupported(): boolean;
					public constructor(param0: native.Array<number>, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean);
					public renderCroppedGreyscaleBitmap(): android.graphics.Bitmap;
					public constructor(param0: number, param1: number);
					public crop(param0: number, param1: number, param2: number, param3: number): com.mercuriete.mrz.reader.LuminanceSource;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class PreferencesActivity {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.PreferencesActivity>;
					public static KEY_SOURCE_LANGUAGE_PREFERENCE: string;
					public static KEY_TARGET_LANGUAGE_PREFERENCE: string;
					public static KEY_TOGGLE_TRANSLATION: string;
					public static KEY_CONTINUOUS_PREVIEW: string;
					public static KEY_PAGE_SEGMENTATION_MODE: string;
					public static KEY_OCR_ENGINE_MODE: string;
					public static KEY_CHARACTER_BLACKLIST: string;
					public static KEY_CHARACTER_WHITELIST: string;
					public static KEY_TOGGLE_LIGHT: string;
					public static KEY_TRANSLATOR: string;
					public static KEY_AUTO_FOCUS: string;
					public static KEY_DISABLE_CONTINUOUS_FOCUS: string;
					public static KEY_HELP_VERSION_SHOWN: string;
					public static KEY_NOT_OUR_RESULTS_SHOWN: string;
					public static KEY_REVERSE_IMAGE: string;
					public static KEY_PLAY_BEEP: string;
					public static KEY_VIBRATE: string;
					public static TRANSLATOR_BING: string;
					public static TRANSLATOR_GOOGLE: string;
					public onCreate(param0: android.os.Bundle): void;
					public constructor();
					public onPause(): void;
					public onSharedPreferenceChanged(param0: android.content.SharedPreferences, param1: string): void;
					public onResume(): void;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export class MrzViewfinderView {
					public static class: java.lang.Class<com.mercuriete.mrz.reader.MrzViewfinderView>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public removeResultText(): void;
					public onDraw(param0: android.graphics.Canvas): void;
					public setCameraManager(param0: com.mercuriete.mrz.reader.camera.CameraManager): void;
					public drawViewfinder(): void;
					public addResultText(param0: com.mercuriete.mrz.reader.OcrResultText): void;
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export module camera {
					export class AutoFocusManager {
						public static class: java.lang.Class<com.mercuriete.mrz.reader.camera.AutoFocusManager>;
						public onAutoFocus(param0: boolean, param1: android.hardware.Camera): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export module camera {
					export class CameraConfigurationManager {
						public static class: java.lang.Class<com.mercuriete.mrz.reader.camera.CameraConfigurationManager>;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export module camera {
					export class CameraManager {
						public static class: java.lang.Class<com.mercuriete.mrz.reader.camera.CameraManager>;
						public adjustFramingRect(param0: number, param1: number): void;
						public closeDriver(): void;
						public constructor(param0: android.content.Context);
						public getFramingRectInPreview(): android.graphics.Rect;
						public getFramingRect(): android.graphics.Rect;
						public requestOcrDecode(param0: android.os.Handler, param1: number): void;
						public buildLuminanceSource(param0: native.Array<number>, param1: number, param2: number): com.mercuriete.mrz.reader.PlanarYUVLuminanceSource;
						public takePicture(param0: android.hardware.Camera.PictureCallback): void;
						public openDriver(param0: android.view.SurfaceHolder): void;
						public startPreview(): void;
						public stopPreview(): void;
						public requestAutoFocus(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export module camera {
					export class PreviewCallback {
						public static class: java.lang.Class<com.mercuriete.mrz.reader.camera.PreviewCallback>;
						public onPreviewFrame(param0: native.Array<number>, param1: android.hardware.Camera): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module mercuriete {
		export module mrz {
			export module reader {
				export module camera {
					export class ShutterButton {
						public static class: java.lang.Class<com.mercuriete.mrz.reader.camera.ShutterButton>;
						public drawableStateChanged(): void;
						public constructor(param0: android.content.Context);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public setOnShutterButtonListener(param0: com.mercuriete.mrz.reader.camera.ShutterButton.OnShutterButtonListener): void;
						public performClick(): boolean;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					}
					export module ShutterButton {
						export class OnShutterButtonListener {
							public static class: java.lang.Class<com.mercuriete.mrz.reader.camera.ShutterButton.OnShutterButtonListener>;
							/**
							 * Constructs a new instance of the com.mercuriete.mrz.reader.camera.ShutterButton$OnShutterButtonListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onShutterButtonFocus(param0: com.mercuriete.mrz.reader.camera.ShutterButton, param1: boolean): void;
								onShutterButtonClick(param0: com.mercuriete.mrz.reader.camera.ShutterButton): void;
							});
							public constructor();
							public onShutterButtonClick(param0: com.mercuriete.mrz.reader.camera.ShutterButton): void;
							public onShutterButtonFocus(param0: com.mercuriete.mrz.reader.camera.ShutterButton, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export class BACDeniedException {
			public static class: java.lang.Class<org.jmrtd.BACDeniedException>;
			public constructor(param0: string, param1: org.jmrtd.BACKeySpec, param2: number);
			public getBACKey(): org.jmrtd.BACKeySpec;
		}
	}
}

declare module org {
	export module jmrtd {
		export class BACKey extends org.jmrtd.BACKeySpec {
			public static class: java.lang.Class<org.jmrtd.BACKey>;
			public equals(param0: any): boolean;
			public setDateOfBirth(param0: string): void;
			public constructor(param0: string, param1: string, param2: string);
			public getDateOfExpiry(): string;
			public getDocumentNumber(): string;
			public constructor();
			public getEncoded(): native.Array<number>;
			public setDocumentNumber(param0: string): void;
			public toString(): string;
			public getDateOfBirth(): string;
			public constructor(param0: string, param1: java.util.Date, param2: java.util.Date);
			public getAlgorithm(): string;
			public getFormat(): string;
			public setDateOfExpiry(param0: string): void;
			public hashCode(): number;
		}
	}
}

declare module org {
	export module jmrtd {
		export class BACKeySpec {
			public static class: java.lang.Class<org.jmrtd.BACKeySpec>;
			/**
			 * Constructs a new instance of the org.jmrtd.BACKeySpec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getDocumentNumber(): string;
				getDateOfBirth(): string;
				getDateOfExpiry(): string;
			});
			public constructor();
			public getDateOfBirth(): string;
			public getDateOfExpiry(): string;
			public getDocumentNumber(): string;
		}
	}
}

declare module org {
	export module jmrtd {
		export class CANKey {
			public static class: java.lang.Class<org.jmrtd.CANKey>;
			public getCardAccessNumber(): string;
			public constructor(param0: string);
		}
	}
}

declare module org {
	export module jmrtd {
		export class JMRTDSecurityProvider {
			public static class: java.lang.Class<org.jmrtd.JMRTDSecurityProvider>;
			public static getSpongyCastleProvider(): java.security.Provider;
			public static beginPreferBouncyCastleProvider(): number;
			public static getBouncyCastleProvider(): java.security.Provider;
			public static endPreferBouncyCastleProvider(param0: number): void;
			public static getInstance(): java.security.Provider;
		}
	}
}

declare module org {
	export module jmrtd {
		export class MRTDFileSystem {
			public static class: java.lang.Class<org.jmrtd.MRTDFileSystem>;
			public selectFile(param0: number): void;
			public getSelectedPath(): native.Array<net.sf.scuba.smartcards.FileInfo>;
			public constructor(param0: org.jmrtd.PassportService);
			public readBinary(param0: number, param1: number): native.Array<number>;
		}
		export module MRTDFileSystem {
			export class MRTDFileInfo {
				public static class: java.lang.Class<org.jmrtd.MRTDFileSystem.MRTDFileInfo>;
				public constructor(param0: number, param1: number);
				public addFragment(param0: number, param1: native.Array<number>): void;
				public getFID(): number;
				public getSmallestUnbufferedFragment(param0: number, param1: number): org.jmrtd.io.FragmentBuffer.Fragment;
				public getFileLength(): number;
				public toString(): string;
				public getBuffer(): native.Array<number>;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export class PACEException {
			public static class: java.lang.Class<org.jmrtd.PACEException>;
			public constructor(param0: string, param1: number);
			public constructor(param0: string);
		}
	}
}

declare module org {
	export module jmrtd {
		export class PassportApduService {
			public static class: java.lang.Class<org.jmrtd.PassportApduService>;
			public static MRZ_PACE_KEY_REFERENCE: number;
			public static CAN_PACE_KEY_REFERENCE: number;
			public static PIN_PACE_KEY_REFERENCE: number;
			public static PUK_PACE_KEY_REFERENCE: number;
			public static APPLET_AID: native.Array<number>;
			public constructor(param0: net.sf.scuba.smartcards.CardService);
			public removeAPDUListener(param0: net.sf.scuba.smartcards.APDUListener): void;
			public sendPSOExtendedLengthMode(param0: net.sf.scuba.smartcards.APDUWrapper, param1: native.Array<number>, param2: native.Array<number>): void;
			public transmit(param0: net.sf.scuba.smartcards.CommandAPDU): net.sf.scuba.smartcards.ResponseAPDU;
			public getATR(): native.Array<number>;
			public sendMSESetATExtAuth(param0: net.sf.scuba.smartcards.APDUWrapper, param1: native.Array<number>): void;
			public sendInternalAuthenticate(param0: net.sf.scuba.smartcards.APDUWrapper, param1: native.Array<number>): native.Array<number>;
			public sendMSEKAT(param0: net.sf.scuba.smartcards.APDUWrapper, param1: native.Array<number>, param2: native.Array<number>): void;
			public sendPSOChainMode(param0: net.sf.scuba.smartcards.APDUWrapper, param1: native.Array<number>, param2: native.Array<number>): void;
			public isOpen(): boolean;
			public addAPDUListener(param0: net.sf.scuba.smartcards.APDUListener): void;
			public close(): void;
			public sendMutualAuthenticate(param0: net.sf.scuba.smartcards.APDUWrapper, param1: native.Array<number>): void;
			public sendGetChallenge(param0: net.sf.scuba.smartcards.APDUWrapper): native.Array<number>;
			public sendSelectApplet(param0: net.sf.scuba.smartcards.APDUWrapper, param1: native.Array<number>): void;
			public sendMutualAuth(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>, param3: javax.crypto.SecretKey, param4: javax.crypto.SecretKey): native.Array<number>;
			public sendReadBinary(param0: number, param1: number, param2: boolean): native.Array<number>;
			public sendMSESetDST(param0: net.sf.scuba.smartcards.APDUWrapper, param1: native.Array<number>): void;
			public addPlainTextAPDUListener(param0: net.sf.scuba.smartcards.APDUListener): void;
			public sendReadBinary(param0: net.sf.scuba.smartcards.APDUWrapper, param1: number, param2: number, param3: boolean): native.Array<number>;
			public sendMSESetATMutualAuth(param0: net.sf.scuba.smartcards.APDUWrapper, param1: string, param2: number, param3: native.Array<number>): void;
			public sendSelectFile(param0: net.sf.scuba.smartcards.APDUWrapper, param1: number): void;
			public sendGetChallenge(): native.Array<number>;
			public removePlainTextAPDUListener(param0: net.sf.scuba.smartcards.APDUListener): void;
			public notifyExchangedPlainTextAPDU(param0: number, param1: net.sf.scuba.smartcards.CommandAPDU, param2: net.sf.scuba.smartcards.ResponseAPDU): void;
			public sendMSESetATIntAuth(param0: net.sf.scuba.smartcards.APDUWrapper, param1: string, param2: java.math.BigInteger): void;
			public setService(param0: net.sf.scuba.smartcards.CardService): void;
			public open(): void;
			public sendSelectFile(param0: number): void;
			public sendGeneralAuthenticate(param0: net.sf.scuba.smartcards.APDUWrapper, param1: native.Array<number>, param2: boolean): native.Array<number>;
		}
	}
}

declare module org {
	export module jmrtd {
		export class PassportService extends org.jmrtd.PassportApduService {
			public static class: java.lang.Class<org.jmrtd.PassportService>;
			public static EF_CARD_ACCESS: number;
			public static EF_CARD_SECURITY: number;
			public static EF_DG1: number;
			public static EF_DG2: number;
			public static EF_DG3: number;
			public static EF_DG4: number;
			public static EF_DG5: number;
			public static EF_DG6: number;
			public static EF_DG7: number;
			public static EF_DG8: number;
			public static EF_DG9: number;
			public static EF_DG10: number;
			public static EF_DG11: number;
			public static EF_DG12: number;
			public static EF_DG13: number;
			public static EF_DG14: number;
			public static EF_DG15: number;
			public static EF_DG16: number;
			public static EF_SOD: number;
			public static EF_COM: number;
			public static EF_CVCA: number;
			public static SF_DG1: number;
			public static SF_DG2: number;
			public static SF_DG3: number;
			public static SF_DG4: number;
			public static SF_DG5: number;
			public static SF_DG6: number;
			public static SF_DG7: number;
			public static SF_DG8: number;
			public static SF_DG9: number;
			public static SF_DG10: number;
			public static SF_DG11: number;
			public static SF_DG12: number;
			public static SF_DG13: number;
			public static SF_DG14: number;
			public static SF_DG15: number;
			public static SF_DG16: number;
			public static SF_COM: number;
			public static SF_SOD: number;
			public static SF_CVCA: number;
			public static SDF: java.text.SimpleDateFormat;
			public static DEFAULT_MAX_BLOCKSIZE: number;
			public maxBlockSize: number;
			public wrapper: org.jmrtd.protocol.SecureMessagingWrapper;
			public constructor(param0: net.sf.scuba.smartcards.CardService);
			public sendSelectApplet(param0: net.sf.scuba.smartcards.APDUWrapper, param1: native.Array<number>): void;
			public sendSelectApplet(param0: boolean): void;
			public doAA(param0: java.security.PublicKey, param1: string, param2: string, param3: native.Array<number>): org.jmrtd.protocol.AAResult;
			public doTA(param0: org.jmrtd.cert.CVCPrincipal, param1: java.util.List<org.jmrtd.cert.CardVerifiableCertificate>, param2: java.security.PrivateKey, param3: string, param4: org.jmrtd.protocol.CAResult, param5: string): org.jmrtd.protocol.TAResult;
			public doBAC(param0: org.jmrtd.BACKeySpec): org.jmrtd.protocol.BACResult;
			public getInputStream(param0: number): net.sf.scuba.smartcards.CardFileInputStream;
			public sendReadBinary(param0: number, param1: number, param2: boolean): native.Array<number>;
			public sendReadBinary(param0: net.sf.scuba.smartcards.APDUWrapper, param1: number, param2: number, param3: boolean): native.Array<number>;
			public constructor(param0: net.sf.scuba.smartcards.CardService, param1: number);
			public sendSelectFile(param0: net.sf.scuba.smartcards.APDUWrapper, param1: number): void;
			public getWrapper(): net.sf.scuba.smartcards.APDUWrapper;
			public isOpen(): boolean;
			public doCA(param0: java.math.BigInteger, param1: string, param2: string, param3: java.security.PublicKey): org.jmrtd.protocol.CAResult;
			public doBAC(param0: javax.crypto.SecretKey, param1: javax.crypto.SecretKey): org.jmrtd.protocol.BACResult;
			public setWrapper(param0: org.jmrtd.protocol.SecureMessagingWrapper): void;
			public open(): void;
			public sendSelectFile(param0: number): void;
			public close(): void;
			public doPACE(param0: java.security.spec.KeySpec, param1: string, param2: java.security.spec.AlgorithmParameterSpec): org.jmrtd.protocol.PACEResult;
		}
		export module PassportService {
			export class State {
				public static class: java.lang.Class<org.jmrtd.PassportService.State>;
				public static SESSION_STOPPED_STATE: org.jmrtd.PassportService.State;
				public static SESSION_STARTED_STATE: org.jmrtd.PassportService.State;
				public static BAC_AUTHENTICATED_STATE: org.jmrtd.PassportService.State;
				public static PACE_AUTHENTICATED_STATE: org.jmrtd.PassportService.State;
				public static AA_EXECUTED_STATE: org.jmrtd.PassportService.State;
				public static CA_EXECUTED_STATE: org.jmrtd.PassportService.State;
				public static TA_AUTHENTICATED_STATE: org.jmrtd.PassportService.State;
				public static valueOf(param0: string): org.jmrtd.PassportService.State;
				public static values(): native.Array<org.jmrtd.PassportService.State>;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export class Util {
			public static class: java.lang.Class<org.jmrtd.Util>;
			public static ENC_MODE: number;
			public static MAC_MODE: number;
			public static PACE_MODE: number;
			public static inferDigestAlgorithmFromCipherAlgorithmForKeyDerivation(param0: string, param1: number): string;
			public static mapNonceGM(param0: native.Array<number>, param1: native.Array<number>, param2: java.security.spec.AlgorithmParameterSpec): java.security.spec.AlgorithmParameterSpec;
			public static encodePublicKeyDataObject(param0: string, param1: java.security.PublicKey, param2: boolean): native.Array<number>;
			public static toBouncyECPrivateKeyParameters(param0: java.security.interfaces.ECPrivateKey): org.bouncycastle.crypto.params.ECPrivateKeyParameters;
			public static inferDigestAlgorithmFromSignatureAlgorithm(param0: string): string;
			public static toECNamedCurveSpec(param0: org.bouncycastle.jce.spec.ECNamedCurveParameterSpec): org.bouncycastle.jce.spec.ECNamedCurveSpec;
			public static deriveKey(param0: native.Array<number>, param1: string, param2: number, param3: native.Array<number>, param4: number): javax.crypto.SecretKey;
			public static toExplicitECParameterSpec(param0: org.bouncycastle.jce.spec.ECNamedCurveParameterSpec): java.security.spec.ECParameterSpec;
			public static mapNonceIM(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>, param3: java.security.spec.AlgorithmParameterSpec): java.security.spec.AlgorithmParameterSpec;
			public static deriveKey(param0: native.Array<number>, param1: number): javax.crypto.SecretKey;
			public static i2os(param0: java.math.BigInteger, param1: number): native.Array<number>;
			public static isValid(param0: java.security.spec.ECPoint, param1: java.security.spec.ECParameterSpec): boolean;
			public static deriveKey(param0: native.Array<number>, param1: string, param2: number, param3: number): javax.crypto.SecretKey;
			public static reconstructPublicKey(param0: java.security.PublicKey): java.security.PublicKey;
			public static getCurveName(param0: java.security.spec.ECParameterSpec): string;
			public static inferProtocolIdentifier(param0: java.security.PublicKey): string;
			public static toBouncyECDomainParameters(param0: java.security.spec.ECParameterSpec): org.bouncycastle.crypto.params.ECDomainParameters;
			public static ecPoint2OS(param0: java.security.spec.ECPoint): native.Array<number>;
			public static toExplicitECParameterSpec(param0: java.security.spec.ECParameterSpec): java.security.spec.ECParameterSpec;
			public static normalize(param0: java.security.spec.ECPoint, param1: java.security.spec.ECParameterSpec): java.security.spec.ECPoint;
			public static computeAffineY(param0: java.math.BigInteger, param1: java.security.spec.ECParameterSpec): java.math.BigInteger;
			public static inferKeyAgreementAlgorithm(param0: java.security.PublicKey): string;
			public static decodePublicKeyFromSmartCard(param0: native.Array<number>, param1: java.security.spec.AlgorithmParameterSpec): java.security.PublicKey;
			public static pad(param0: native.Array<number>, param1: number): native.Array<number>;
			public static os2fe(param0: native.Array<number>, param1: java.math.BigInteger): java.math.BigInteger;
			public static i2os(param0: java.math.BigInteger): native.Array<number>;
			public static os2i(param0: native.Array<number>, param1: number, param2: number): java.math.BigInteger;
			public static getRawECDSASignature(param0: native.Array<number>, param1: number): native.Array<number>;
			public static mapNonceGMWithECDH(param0: java.math.BigInteger, param1: java.security.spec.ECPoint, param2: java.security.spec.ECParameterSpec): java.security.spec.ECParameterSpec;
			public static unpad(param0: native.Array<number>): native.Array<number>;
			public static getDetailedPrivateKeyAlgorithm(param0: java.security.PrivateKey): string;
			public static recoverMessage(param0: number, param1: native.Array<number>): native.Array<number>;
			public static toPublicKey(param0: org.bouncycastle.asn1.x509.SubjectPublicKeyInfo): java.security.PublicKey;
			public static os2ECPoint(param0: native.Array<number>): java.security.spec.ECPoint;
			public static fromBouncyCastleECPoint(param0: org.bouncycastle.math.ec.ECPoint): java.security.spec.ECPoint;
			public static mapNonceGMWithDH(param0: java.math.BigInteger, param1: java.math.BigInteger, param2: javax.crypto.spec.DHParameterSpec): javax.crypto.spec.DHParameterSpec;
			public static computeKeySeed(param0: string, param1: string, param2: string, param3: string, param4: boolean): native.Array<number>;
			public static toSubjectPublicKeyInfo(param0: java.security.PublicKey): org.bouncycastle.asn1.x509.SubjectPublicKeyInfo;
			public static getPrime(param0: java.security.spec.AlgorithmParameterSpec): java.math.BigInteger;
			public static toBouncyECPublicKeyParameters(param0: java.security.interfaces.ECPublicKey): org.bouncycastle.crypto.params.ECPublicKeyParameters;
			public static multiply(param0: java.math.BigInteger, param1: java.security.spec.ECPoint, param2: java.security.spec.ECParameterSpec): java.security.spec.ECPoint;
			public static encodePublicKeyDataObject(param0: string, param1: java.security.PublicKey): native.Array<number>;
			public static pad(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
			public static getDetailedPublicKeyAlgorithm(param0: java.security.PublicKey): string;
			public static os2i(param0: native.Array<number>): java.math.BigInteger;
			public static encodePublicKeyForSmartCard(param0: java.security.PublicKey): native.Array<number>;
			public static unwrapDO(param0: number, param1: native.Array<number>): native.Array<number>;
			public static alignKeyDataToSize(param0: native.Array<number>, param1: number): native.Array<number>;
			public static computeKeySeed(param0: string, param1: string, param2: boolean): native.Array<number>;
			public static toExplicitDHParameterSpec(param0: org.bouncycastle.crypto.params.DHParameters): javax.crypto.spec.DHParameterSpec;
			public static wrapDO(param0: number, param1: native.Array<number>): native.Array<number>;
		}
	}
}

declare module org {
	export module jmrtd {
		export module cbeff {
			export class BiometricDataBlock {
				public static class: java.lang.Class<org.jmrtd.cbeff.BiometricDataBlock>;
				/**
				 * Constructs a new instance of the org.jmrtd.cbeff.BiometricDataBlock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getStandardBiometricHeader(): org.jmrtd.cbeff.StandardBiometricHeader;
				});
				public constructor();
				public getStandardBiometricHeader(): org.jmrtd.cbeff.StandardBiometricHeader;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cbeff {
			export class BiometricDataBlockDecoder<B>  extends java.lang.Object {
				public static class: java.lang.Class<org.jmrtd.cbeff.BiometricDataBlockDecoder<any>>;
				/**
				 * Constructs a new instance of the org.jmrtd.cbeff.BiometricDataBlockDecoder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					decode(param0: java.io.InputStream, param1: org.jmrtd.cbeff.StandardBiometricHeader, param2: number, param3: number): B;
				});
				public constructor();
				public decode(param0: java.io.InputStream, param1: org.jmrtd.cbeff.StandardBiometricHeader, param2: number, param3: number): B;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cbeff {
			export class BiometricDataBlockEncoder<B>  extends java.lang.Object {
				public static class: java.lang.Class<org.jmrtd.cbeff.BiometricDataBlockEncoder<any>>;
				/**
				 * Constructs a new instance of the org.jmrtd.cbeff.BiometricDataBlockEncoder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					encode(param0: B, param1: java.io.OutputStream): void;
				});
				public constructor();
				public encode(param0: B, param1: java.io.OutputStream): void;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cbeff {
			export class CBEFFInfo {
				public static class: java.lang.Class<org.jmrtd.cbeff.CBEFFInfo>;
				/**
				 * Constructs a new instance of the org.jmrtd.cbeff.CBEFFInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static BIOMETRIC_SUBTYPE_MASK_RING_FINGER: number;
				public static BIOMETRIC_TYPE_THERMAL_HAND_IMAGE: number;
				public static BIOMETRIC_TYPE_NO_INFORMATION_GIVEN: number;
				public static BIOMETRIC_TYPE_FINGER_GEOMETRY: number;
				public static BIOMETRIC_TYPE_FOOT_PRINT: number;
				public static BIOMETRIC_SUBTYPE_MASK_LITTLE_FINGER: number;
				public static BIOMETRIC_TYPE_DNA: number;
				public static BIOMETRIC_SUBTYPE_MASK_LEFT: number;
				public static BIOMETRIC_TYPE_GAIT: number;
				public static BIOMETRIC_TYPE_HAND_GEOMETRY: number;
				public static BIOMETRIC_TYPE_PALM_PRINT: number;
				public static BIOMETRIC_TYPE_VOICE: number;
				public static BIOMETRIC_TYPE_VEIN_PATTERN: number;
				public static BIOMETRIC_TYPE_MULTIPLE_BIOMETRICS_USED: number;
				public static BIOMETRIC_TYPE_IRIS: number;
				public static BIOMETRIC_TYPE_FINGERPRINT: number;
				public static BIOMETRIC_TYPE_SIGNATURE_DYNAMICS: number;
				public static BIOMETRIC_SUBTYPE_NONE: number;
				public static BIOMETRIC_SUBTYPE_MASK_THUMB: number;
				public static BIOMETRIC_TYPE_BODY_ODOR: number;
				public static BIOMETRIC_SUBTYPE_MASK_RIGHT: number;
				public static BIOMETRIC_SUBTYPE_MASK_MIDDLE_FINGER: number;
				public static BIOMETRIC_TYPE_FACIAL_FEATURES: number;
				public static BIOMETRIC_SUBTYPE_MASK_POINTER_FINGER: number;
				public static BIOMETRIC_TYPE_RETINA: number;
				public static BIOMETRIC_TYPE_EAR_SHAPE: number;
				public static BIOMETRIC_TYPE_KEYSTROKE_DYNAMICS: number;
				public static BIOMETRIC_TYPE_THERMAL_FACE_IMAGE: number;
				public static BIOMETRIC_TYPE_LIP_MOVEMENT: number;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cbeff {
			export class ComplexCBEFFInfo extends org.jmrtd.cbeff.CBEFFInfo {
				public static class: java.lang.Class<org.jmrtd.cbeff.ComplexCBEFFInfo>;
				public addAll(param0: java.util.List<org.jmrtd.cbeff.CBEFFInfo>): void;
				public add(param0: org.jmrtd.cbeff.CBEFFInfo): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getSubRecords(): java.util.List<org.jmrtd.cbeff.CBEFFInfo>;
				public remove(param0: number): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cbeff {
			export class ISO781611 {
				public static class: java.lang.Class<org.jmrtd.cbeff.ISO781611>;
				/**
				 * Constructs a new instance of the org.jmrtd.cbeff.ISO781611 interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static SMT_DO_DS: number;
				public static BIOMETRIC_HEADER_TEMPLATE_BASE_TAG: number;
				public static BIOMETRIC_DATA_BLOCK_CONSTRUCTED_TAG: number;
				public static DISCRETIONARY_DATA_FOR_PAYLOAD_TAG: number;
				public static BIOMETRIC_SUBTYPE_TAG: number;
				public static FORMAT_OWNER_TAG: number;
				public static FORMAT_TYPE_TAG: number;
				public static BIOMETRIC_INFO_COUNT_TAG: number;
				public static PATRON_HEADER_VERSION_TAG: number;
				public static BIOMETRIC_DATA_BLOCK_TAG: number;
				public static CREATION_DATE_AND_TIME_TAG: number;
				public static SMT_DO_PV: number;
				public static SMT_TAG: number;
				public static SMT_DO_CG: number;
				public static BIOMETRIC_TYPE_TAG: number;
				public static CREATOR_OF_BIOMETRIC_REFERENCE_DATA: number;
				public static BIOMETRIC_INFORMATION_GROUP_TEMPLATE_TAG: number;
				public static BIOMETRIC_INFORMATION_TEMPLATE_TAG: number;
				public static SMT_DO_CC: number;
				public static DISCRETIONARY_DATA_FOR_PAYLOAD_CONSTRUCTED_TAG: number;
				public static VALIDITY_PERIOD_TAG: number;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cbeff {
			export class ISO781611Decoder extends org.jmrtd.cbeff.ISO781611 {
				public static class: java.lang.Class<org.jmrtd.cbeff.ISO781611Decoder>;
				public decode(param0: java.io.InputStream): org.jmrtd.cbeff.ComplexCBEFFInfo;
				public constructor(param0: org.jmrtd.cbeff.BiometricDataBlockDecoder<any>);
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cbeff {
			export class ISO781611Encoder<B>  extends org.jmrtd.cbeff.ISO781611 {
				public static class: java.lang.Class<org.jmrtd.cbeff.ISO781611Encoder<any>>;
				public constructor(param0: org.jmrtd.cbeff.BiometricDataBlockEncoder<any>);
				public encode(param0: org.jmrtd.cbeff.CBEFFInfo, param1: java.io.OutputStream): void;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cbeff {
			export class SimpleCBEFFInfo<B>  extends org.jmrtd.cbeff.CBEFFInfo {
				public static class: java.lang.Class<org.jmrtd.cbeff.SimpleCBEFFInfo<any>>;
				public constructor(param0: any);
				public getBiometricDataBlock(): any;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cbeff {
			export class StandardBiometricHeader {
				public static class: java.lang.Class<org.jmrtd.cbeff.StandardBiometricHeader>;
				public constructor(param0: java.util.Map<java.lang.Integer,native.Array<number>>);
				public getElements(): java.util.SortedMap<java.lang.Integer,native.Array<number>>;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cert {
			export class CVCAuthorizationTemplate {
				public static class: java.lang.Class<org.jmrtd.cert.CVCAuthorizationTemplate>;
				public constructor(param0: org.jmrtd.cert.CVCAuthorizationTemplate.Role, param1: org.jmrtd.cert.CVCAuthorizationTemplate.Permission);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getAccessRight(): org.jmrtd.cert.CVCAuthorizationTemplate.Permission;
				public constructor(param0: org.ejbca.cvc.CVCAuthorizationTemplate);
				public toString(): string;
				public getRole(): org.jmrtd.cert.CVCAuthorizationTemplate.Role;
			}
			export module CVCAuthorizationTemplate {
				export class Permission {
					public static class: java.lang.Class<org.jmrtd.cert.CVCAuthorizationTemplate.Permission>;
					public static READ_ACCESS_NONE: org.jmrtd.cert.CVCAuthorizationTemplate.Permission;
					public static READ_ACCESS_DG3: org.jmrtd.cert.CVCAuthorizationTemplate.Permission;
					public static READ_ACCESS_DG4: org.jmrtd.cert.CVCAuthorizationTemplate.Permission;
					public static READ_ACCESS_DG3_AND_DG4: org.jmrtd.cert.CVCAuthorizationTemplate.Permission;
					public static valueOf(param0: string): org.jmrtd.cert.CVCAuthorizationTemplate.Permission;
					public implies(param0: org.jmrtd.cert.CVCAuthorizationTemplate.Permission): boolean;
					public getValue(): number;
					public static values(): native.Array<org.jmrtd.cert.CVCAuthorizationTemplate.Permission>;
				}
				export class Role {
					public static class: java.lang.Class<org.jmrtd.cert.CVCAuthorizationTemplate.Role>;
					public static CVCA: org.jmrtd.cert.CVCAuthorizationTemplate.Role;
					public static DV_D: org.jmrtd.cert.CVCAuthorizationTemplate.Role;
					public static DV_F: org.jmrtd.cert.CVCAuthorizationTemplate.Role;
					public static IS: org.jmrtd.cert.CVCAuthorizationTemplate.Role;
					public static valueOf(param0: string): org.jmrtd.cert.CVCAuthorizationTemplate.Role;
					public getValue(): number;
					public static values(): native.Array<org.jmrtd.cert.CVCAuthorizationTemplate.Role>;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cert {
			export class CVCPrincipal {
				public static class: java.lang.Class<org.jmrtd.cert.CVCPrincipal>;
				public getMnemonic(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: net.sf.scuba.data.Country, param1: string, param2: string);
				public getSeqNumber(): string;
				public getName(): string;
				public toString(): string;
				public constructor(param0: string);
				public getCountry(): net.sf.scuba.data.Country;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cert {
			export class CVCertificateBuilder {
				public static class: java.lang.Class<org.jmrtd.cert.CVCertificateBuilder>;
				public static createCertificate(param0: java.security.PublicKey, param1: java.security.PrivateKey, param2: string, param3: org.jmrtd.cert.CVCPrincipal, param4: org.jmrtd.cert.CVCPrincipal, param5: org.jmrtd.cert.CVCAuthorizationTemplate, param6: java.util.Date, param7: java.util.Date, param8: string): org.jmrtd.cert.CardVerifiableCertificate;
				public constructor();
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cert {
			export class CVCertificateFactorySpi {
				public static class: java.lang.Class<org.jmrtd.cert.CVCertificateFactorySpi>;
				public engineGenerateCertificates(param0: java.io.InputStream): java.util.Collection<any>;
				public engineGenerateCertificate(param0: java.io.InputStream): java.security.cert.Certificate;
				public engineGenerateCRL(param0: java.io.InputStream): java.security.cert.CRL;
				public engineGenerateCRLs(param0: java.io.InputStream): java.util.Collection<any>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module cert {
			export class CardVerifiableCertificate {
				public static class: java.lang.Class<org.jmrtd.cert.CardVerifiableCertificate>;
				public constructor(param0: org.jmrtd.cert.CVCPrincipal, param1: org.jmrtd.cert.CVCPrincipal, param2: java.security.PublicKey, param3: string, param4: java.util.Date, param5: java.util.Date, param6: org.jmrtd.cert.CVCAuthorizationTemplate.Role, param7: org.jmrtd.cert.CVCAuthorizationTemplate.Permission, param8: native.Array<number>);
				public getNotBefore(): java.util.Date;
				public getNotAfter(): java.util.Date;
				public getHolderReference(): org.jmrtd.cert.CVCPrincipal;
				public getSignature(): native.Array<number>;
				public getPublicKey(): java.security.PublicKey;
				public toString(): string;
				public getAuthorizationTemplate(): org.jmrtd.cert.CVCAuthorizationTemplate;
				public verify(param0: java.security.PublicKey, param1: string): void;
				public constructor(param0: org.ejbca.cvc.CVCertificate);
				public hashCode(): number;
				public verify(param0: java.security.PublicKey): void;
				public getCertBodyData(): native.Array<number>;
				public equals(param0: any): boolean;
				public getSigAlgName(): string;
				public getEncoded(): native.Array<number>;
				public getAuthorityReference(): org.jmrtd.cert.CVCPrincipal;
				public getSigAlgOID(): string;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module io {
			export class FragmentBuffer {
				public static class: java.lang.Class<org.jmrtd.io.FragmentBuffer>;
				public updateFrom(param0: org.jmrtd.io.FragmentBuffer): void;
				public isCoveredByFragment(param0: number, param1: number): boolean;
				public getBufferedLength(param0: number): number;
				public getPosition(): number;
				public toString(): string;
				public getLength(): number;
				public constructor();
				public getBuffer(): native.Array<number>;
				public addFragment(param0: number, param1: native.Array<number>): void;
				public getSmallestUnbufferedFragment(param0: number, param1: number): org.jmrtd.io.FragmentBuffer.Fragment;
				public getFragments(): java.util.Collection<org.jmrtd.io.FragmentBuffer.Fragment>;
				public addFragment(param0: number, param1: native.Array<number>, param2: number, param3: number): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number);
				public addFragment(param0: number, param1: number): void;
				public isCoveredByFragment(param0: number): boolean;
				public getBytesBuffered(): number;
			}
			export module FragmentBuffer {
				export class Fragment {
					public static class: java.lang.Class<org.jmrtd.io.FragmentBuffer.Fragment>;
					public equals(param0: any): boolean;
					public toString(): string;
					public static getInstance(param0: number, param1: number): org.jmrtd.io.FragmentBuffer.Fragment;
					public getLength(): number;
					public getOffset(): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module io {
			export class InputStreamBuffer {
				public static class: java.lang.Class<org.jmrtd.io.InputStreamBuffer>;
				public buffer: org.jmrtd.io.FragmentBuffer;
				public updateFrom(param0: org.jmrtd.io.InputStreamBuffer): void;
				public constructor(param0: java.io.InputStream, param1: number);
				public getInputStream(): org.jmrtd.io.InputStreamBuffer.SubInputStream;
				public getPosition(): number;
				public toString(): string;
				public getLength(): number;
				public getBytesBuffered(): number;
			}
			export module InputStreamBuffer {
				export class SubInputStream {
					public static class: java.lang.Class<org.jmrtd.io.InputStreamBuffer.SubInputStream>;
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public reset(): void;
					public getBuffer(): org.jmrtd.io.FragmentBuffer;
					public read(param0: native.Array<number>): number;
					public markSupported(): boolean;
					public skip(param0: number): number;
					public close(): void;
					public constructor(param0: org.jmrtd.io.InputStreamBuffer, param1: any);
					public getPosition(): number;
					public mark(param0: number): void;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module io {
			export class PositionInputStream {
				public static class: java.lang.Class<org.jmrtd.io.PositionInputStream>;
				public reset(): void;
				public markSupported(): boolean;
				public read(): number;
				public skip(param0: number): number;
				public read(param0: native.Array<number>): number;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public getPosition(): number;
				public constructor(param0: java.io.InputStream);
				public mark(param0: number): void;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module io {
			export class SplittableInputStream {
				public static class: java.lang.Class<org.jmrtd.io.SplittableInputStream>;
				public inputStreamBuffer: org.jmrtd.io.InputStreamBuffer;
				public markSupported(): boolean;
				public close(): void;
				public updateFrom(param0: org.jmrtd.io.SplittableInputStream): void;
				public getPosition(): number;
				public getInputStream(param0: number): java.io.InputStream;
				public getLength(): number;
				public reset(): void;
				public read(): number;
				public skip(param0: number): number;
				public constructor(param0: java.io.InputStream, param1: number);
				public available(): number;
				public mark(param0: number): void;
				public getBytesBuffered(): number;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export abstract class AbstractImageInfo extends org.jmrtd.lds.ImageInfo {
				public static class: java.lang.Class<org.jmrtd.lds.AbstractImageInfo>;
				public constructor(param0: number, param1: number, param2: number, param3: java.io.InputStream, param4: number, param5: string);
				public getRecordLength(): number;
				public setType(param0: number): void;
				public setHeight(param0: number): void;
				public setImageBytes(param0: native.Array<number>): void;
				public setMimeType(param0: string): void;
				public getHeight(): number;
				public readObject(param0: java.io.InputStream): void;
				public getType(): number;
				public constructor(param0: number, param1: string);
				public writeObject(param0: java.io.OutputStream): void;
				public toString(): string;
				public writeImage(param0: java.io.OutputStream): void;
				public setWidth(param0: number): void;
				public getImageInputStream(): java.io.InputStream;
				public getWidth(): number;
				public getMimeType(): string;
				public getImageLength(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number);
				public getEncoded(): native.Array<number>;
				public readImage(param0: java.io.InputStream, param1: number): void;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export abstract class AbstractLDSFile extends org.jmrtd.lds.LDSFile {
				public static class: java.lang.Class<org.jmrtd.lds.AbstractLDSFile>;
				public readObject(param0: java.io.InputStream): void;
				public writeObject(param0: java.io.OutputStream): void;
				public getEncoded(): native.Array<number>;
				public getLength(): number;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export abstract class AbstractLDSInfo extends org.jmrtd.lds.LDSElement {
				public static class: java.lang.Class<org.jmrtd.lds.AbstractLDSInfo>;
				public writeObject(param0: java.io.OutputStream): void;
				public getEncoded(): native.Array<number>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export abstract class AbstractListInfo<R>  extends org.jmrtd.lds.AbstractLDSInfo {
				public static class: java.lang.Class<org.jmrtd.lds.AbstractListInfo<any>>;
				public readObject(param0: java.io.InputStream): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public addAll(param0: java.util.List<any>): void;
				public writeObject(param0: java.io.OutputStream): void;
				public add(param0: any): void;
				public getEncoded(): native.Array<number>;
				public getSubRecords(): java.util.List<any>;
				public remove(param0: number): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export abstract class AbstractTaggedLDSFile extends org.jmrtd.lds.AbstractLDSFile {
				public static class: java.lang.Class<org.jmrtd.lds.AbstractTaggedLDSFile>;
				public writeContent(param0: java.io.OutputStream): void;
				public constructor(param0: number, param1: java.io.InputStream);
				public readObject(param0: java.io.InputStream): void;
				public constructor(param0: number);
				public writeObject(param0: java.io.OutputStream): void;
				public getTag(): number;
				public toString(): string;
				public readContent(param0: java.io.InputStream): void;
				public getLength(): number;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class ActiveAuthenticationInfo extends org.jmrtd.lds.SecurityInfo {
				public static class: java.lang.Class<org.jmrtd.lds.ActiveAuthenticationInfo>;
				public static VERSION_1: number;
				public static ECDSA_PLAIN_SIGNATURES: string;
				public static ECDSA_PLAIN_SHA1_OID: string;
				public static ECDSA_PLAIN_SHA224_OID: string;
				public static ECDSA_PLAIN_SHA256_OID: string;
				public static ECDSA_PLAIN_SHA384_OID: string;
				public static ECDSA_PLAIN_SHA512_OID: string;
				public static ECDSA_PLAIN_RIPEMD160_OID: string;
				public static lookupMnemonicByOID(param0: string): string;
				public getObjectIdentifier(): string;
				public toString(): string;
				public constructor(param0: string);
				public constructor();
				public getSignatureAlgorithmOID(): string;
				public getVersion(): number;
				public static toSignatureAlgorithmOIDString(param0: string): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getProtocolOIDString(): string;
				public getEncoded(): native.Array<number>;
				public getDERObject(): org.bouncycastle.asn1.ASN1Primitive;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export abstract class CBEFFDataGroup<R>  extends org.jmrtd.lds.DataGroup {
				public static class: java.lang.Class<org.jmrtd.lds.CBEFFDataGroup<any>>;
				public static LOGGER: java.util.logging.Logger;
				public constructor(param0: number, param1: java.io.InputStream);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number);
				public addAll(param0: java.util.List<any>): void;
				public constructor(param0: number, param1: java.util.List<any>);
				public add(param0: any): void;
				public writeOptionalRandomData(param0: java.io.OutputStream): void;
				public remove(param0: number): void;
				public getSubRecords(): java.util.List<any>;
				public getLength(): number;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class CVCAFile extends org.jmrtd.lds.AbstractLDSFile {
				public static class: java.lang.Class<org.jmrtd.lds.CVCAFile>;
				public static CAR_TAG: number;
				public static LENGTH: number;
				public getFID(): number;
				public readObject(param0: java.io.InputStream): void;
				public getAltCAReference(): org.jmrtd.cert.CVCPrincipal;
				public constructor(param0: number, param1: string);
				public writeObject(param0: java.io.OutputStream): void;
				public toString(): string;
				public constructor(param0: java.io.InputStream);
				public getLength(): number;
				public constructor(param0: number, param1: string, param2: string);
				public constructor(param0: number, param1: java.io.InputStream);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: string, param1: string);
				public getCAReference(): org.jmrtd.cert.CVCPrincipal;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class CardAccessFile {
				public static class: java.lang.Class<org.jmrtd.lds.CardAccessFile>;
				public writeContent(param0: java.io.OutputStream): void;
				public hashCode(): number;
				public getPACEInfos(): java.util.Collection<org.jmrtd.lds.PACEInfo>;
				public constructor(param0: java.util.Collection<org.jmrtd.lds.SecurityInfo>);
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor(param0: java.io.InputStream);
				public readContent(param0: java.io.InputStream): void;
				public getSecurityInfos(): java.util.Collection<org.jmrtd.lds.SecurityInfo>;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class CardSecurityFile {
				public static class: java.lang.Class<org.jmrtd.lds.CardSecurityFile>;
				public getEncryptedDigest(): native.Array<number>;
				public writeContent(param0: java.io.OutputStream): void;
				public constructor(param0: string, param1: string, param2: java.util.Collection<org.jmrtd.lds.SecurityInfo>, param3: native.Array<number>, param4: java.security.cert.X509Certificate);
				public getDigestEncryptionAlgorithm(): string;
				public getPACEInfos(): java.util.Collection<org.jmrtd.lds.PACEInfo>;
				public getChipAuthenticationInfos(): java.util.Collection<org.jmrtd.lds.ChipAuthenticationInfo>;
				public constructor(param0: string, param1: string, param2: java.util.Collection<org.jmrtd.lds.SecurityInfo>, param3: java.security.PrivateKey, param4: java.security.cert.X509Certificate, param5: string);
				public constructor(param0: string, param1: string, param2: java.util.Collection<org.jmrtd.lds.SecurityInfo>, param3: java.security.PrivateKey, param4: java.security.cert.X509Certificate);
				public toString(): string;
				public constructor(param0: java.io.InputStream);
				public readContent(param0: java.io.InputStream): void;
				public getDigestAlgorithm(): string;
				public hashCode(): number;
				public getChipAuthenticationPublicKeyInfos(): java.util.Collection<org.jmrtd.lds.ChipAuthenticationPublicKeyInfo>;
				public equals(param0: any): boolean;
				public getEncoded(): native.Array<number>;
				public getSecurityInfos(): java.util.Collection<org.jmrtd.lds.SecurityInfo>;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class ChipAuthenticationInfo extends org.jmrtd.lds.SecurityInfo {
				public static class: java.lang.Class<org.jmrtd.lds.ChipAuthenticationInfo>;
				public static VERSION_1: number;
				public static VERSION_2: number;
				public checkFields(): void;
				public static toKeyAgreementAlgorithm(param0: string): string;
				public getObjectIdentifier(): string;
				public getKeyId(): java.math.BigInteger;
				public toString(): string;
				public constructor();
				public static toDigestAlgorithm(param0: string): string;
				public constructor(param0: string, param1: number, param2: java.math.BigInteger);
				public getVersion(): number;
				public static toKeyLength(param0: string): number;
				public hashCode(): number;
				public constructor(param0: string, param1: number);
				public equals(param0: any): boolean;
				public getProtocolOIDString(): string;
				public getEncoded(): native.Array<number>;
				public static toCipherAlgorithm(param0: string): string;
				public getDERObject(): org.bouncycastle.asn1.ASN1Primitive;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class ChipAuthenticationPublicKeyInfo extends org.jmrtd.lds.SecurityInfo {
				public static class: java.lang.Class<org.jmrtd.lds.ChipAuthenticationPublicKeyInfo>;
				public checkFields(): void;
				public constructor(param0: java.security.PublicKey);
				public getSubjectPublicKey(): java.security.PublicKey;
				public getObjectIdentifier(): string;
				public static checkRequiredIdentifier(param0: string): boolean;
				public getKeyId(): java.math.BigInteger;
				public toString(): string;
				public constructor(param0: java.security.PublicKey, param1: java.math.BigInteger);
				public constructor();
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getProtocolOIDString(): string;
				public getEncoded(): native.Array<number>;
				public getDERObject(): org.bouncycastle.asn1.ASN1Primitive;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export abstract class DataGroup extends org.jmrtd.lds.AbstractTaggedLDSFile {
				public static class: java.lang.Class<org.jmrtd.lds.DataGroup>;
				public constructor(param0: number, param1: java.io.InputStream);
				public constructor(param0: number);
				public toString(): string;
				public getLength(): number;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export abstract class DisplayedImageDataGroup extends org.jmrtd.lds.DataGroup {
				public static class: java.lang.Class<org.jmrtd.lds.DisplayedImageDataGroup>;
				public writeContent(param0: java.io.OutputStream): void;
				public constructor(param0: number, param1: java.io.InputStream);
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: number);
				public constructor(param0: number, param1: java.util.List<org.jmrtd.lds.DisplayedImageInfo>, param2: number);
				public toString(): string;
				public getImages(): java.util.List<org.jmrtd.lds.DisplayedImageInfo>;
				public readContent(param0: java.io.InputStream): void;
				public getLength(): number;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class DisplayedImageInfo extends org.jmrtd.lds.AbstractImageInfo {
				public static class: java.lang.Class<org.jmrtd.lds.DisplayedImageInfo>;
				public static DISPLAYED_PORTRAIT_TAG: number;
				public static DISPLAYED_SIGNATURE_OR_MARK_TAG: number;
				public constructor(param0: number, param1: number, param2: number, param3: java.io.InputStream, param4: number, param5: string);
				public getRecordLength(): number;
				public getHeight(): number;
				public readObject(param0: java.io.InputStream): void;
				public getType(): number;
				public constructor(param0: number, param1: string);
				public writeObject(param0: java.io.OutputStream): void;
				public constructor(param0: java.io.InputStream);
				public getImageInputStream(): java.io.InputStream;
				public getWidth(): number;
				public getMimeType(): string;
				public getImageLength(): number;
				public constructor(param0: number);
				public constructor(param0: number, param1: native.Array<number>);
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class ImageInfo extends org.jmrtd.lds.LDSElement {
				public static class: java.lang.Class<org.jmrtd.lds.ImageInfo>;
				/**
				 * Constructs a new instance of the org.jmrtd.lds.ImageInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getType(): number;
					getMimeType(): string;
					getWidth(): number;
					getHeight(): number;
					getRecordLength(): number;
					getImageLength(): number;
					getImageInputStream(): java.io.InputStream;
					getEncoded(): native.Array<number>;
				});
				public constructor();
				public static WSQ_MIME_TYPE: string;
				public static TYPE_FINGER: number;
				public static JPEG_MIME_TYPE: string;
				public static JPEG2000_MIME_TYPE: string;
				public static TYPE_IRIS: number;
				public static TYPE_SIGNATURE_OR_MARK: number;
				public static TYPE_PORTRAIT: number;
				public getRecordLength(): number;
				public getImageInputStream(): java.io.InputStream;
				public getWidth(): number;
				public getHeight(): number;
				public getType(): number;
				public getMimeType(): string;
				public getImageLength(): number;
				public getEncoded(): native.Array<number>;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class LDSElement {
				public static class: java.lang.Class<org.jmrtd.lds.LDSElement>;
				/**
				 * Constructs a new instance of the org.jmrtd.lds.LDSElement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getEncoded(): native.Array<number>;
				});
				public constructor();
				public getEncoded(): native.Array<number>;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class LDSFile extends org.jmrtd.lds.LDSElement {
				public static class: java.lang.Class<org.jmrtd.lds.LDSFile>;
				/**
				 * Constructs a new instance of the org.jmrtd.lds.LDSFile interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getLength(): number;
					getEncoded(): native.Array<number>;
				});
				public constructor();
				public static EF_DG1_TAG: number;
				public static EF_DG16_TAG: number;
				public static EF_DG10_TAG: number;
				public static EF_DG12_TAG: number;
				public static EF_DG9_TAG: number;
				public static EF_DG2_TAG: number;
				public static EF_DG7_TAG: number;
				public static EF_DG4_TAG: number;
				public static EF_DG11_TAG: number;
				public static EF_DG15_TAG: number;
				public static EF_DG13_TAG: number;
				public static EF_DG3_TAG: number;
				public static EF_DG8_TAG: number;
				public static EF_DG14_TAG: number;
				public static EF_COM_TAG: number;
				public static EF_SOD_TAG: number;
				public static EF_DG5_TAG: number;
				public static EF_DG6_TAG: number;
				public getEncoded(): native.Array<number>;
				public getLength(): number;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class LDSFileUtil {
				public static class: java.lang.Class<org.jmrtd.lds.LDSFileUtil>;
				public static lookupTagByDataGroupNumber(param0: number): number;
				public static lookupTagByFID(param0: number): number;
				public static lookupDataGroupNumberByFID(param0: number): number;
				public static lookupFIDByTag(param0: number): number;
				public static lookupFileNameByTag(param0: number): string;
				public static lookupFIDByDataGroupNumber(param0: number): number;
				public static getLDSFile(param0: number, param1: java.io.InputStream): org.jmrtd.lds.AbstractLDSFile;
				public static lookupFileNameByFID(param0: number): string;
				public static lookupDataGroupNumberByTag(param0: number): number;
				public constructor();
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class PACEDomainParameterInfo extends org.jmrtd.lds.SecurityInfo {
				public static class: java.lang.Class<org.jmrtd.lds.PACEDomainParameterInfo>;
				public static ID_DH_PUBLIC_NUMBER: string;
				public static ID_EC_PUBLIC_KEY: string;
				public getObjectIdentifier(): string;
				public static checkRequiredIdentifier(param0: string): boolean;
				public constructor(param0: string, param1: org.bouncycastle.asn1.x509.AlgorithmIdentifier);
				public toString(): string;
				public constructor();
				public static toECParameterSpec(param0: org.bouncycastle.asn1.x509.AlgorithmIdentifier): java.security.spec.ECParameterSpec;
				public static toAlgorithmIdentifier(param0: java.security.spec.ECParameterSpec): org.bouncycastle.asn1.x509.AlgorithmIdentifier;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getProtocolOIDString(): string;
				public constructor(param0: string, param1: org.bouncycastle.asn1.x509.AlgorithmIdentifier, param2: java.math.BigInteger);
				public getEncoded(): native.Array<number>;
				public getParameterId(): java.math.BigInteger;
				public getParameters(): java.security.spec.AlgorithmParameterSpec;
				public getDERObject(): org.bouncycastle.asn1.ASN1Primitive;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class PACEInfo extends org.jmrtd.lds.SecurityInfo {
				public static class: java.lang.Class<org.jmrtd.lds.PACEInfo>;
				public static PARAM_ID_GFP_1024_160: number;
				public static PARAM_ID_GFP_2048_224: number;
				public static PARAM_ID_GFP_2048_256: number;
				public static PARAM_ID_ECP_NIST_P192_R1: number;
				public static PARAM_ID_ECP_BRAINPOOL_P192_R1: number;
				public static PARAM_ID_ECP_NIST_P224_R1: number;
				public static PARAM_ID_ECP_BRAINPOOL_P224_R1: number;
				public static PARAM_ID_ECP_NST_P256_R1: number;
				public static PARAM_ID_ECP_BRAINPOOL_P256_R1: number;
				public static PARAM_ID_ECP_BRAINPOOL_P320_R1: number;
				public static PARAM_ID_ECP_NIST_P384_R1: number;
				public static PARAM_ID_ECP_BRAINPOOL_P384_R1: number;
				public static PARAM_ID_ECP_BRAINPOOL_P512_R1: number;
				public static PARAM_ID_ECP_NIST_P521_R1: number;
				public static toKeyAgreementAlgorithm(param0: string): string;
				public static toParameterSpec(param0: java.math.BigInteger): java.security.spec.AlgorithmParameterSpec;
				public static toParameterSpec(param0: number): java.security.spec.AlgorithmParameterSpec;
				public getObjectIdentifier(): string;
				public constructor(param0: string, param1: number, param2: number);
				public static checkRequiredIdentifier(param0: string): boolean;
				public toString(): string;
				public constructor();
				public static toDigestAlgorithm(param0: string): string;
				public constructor(param0: string, param1: number, param2: java.math.BigInteger);
				public static toStandardizedParamIdString(param0: java.math.BigInteger): string;
				public getVersion(): number;
				public static toKeyLength(param0: string): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getProtocolOIDString(): string;
				public getEncoded(): native.Array<number>;
				public static toMappingType(param0: string): org.jmrtd.lds.PACEInfo.MappingType;
				public static createPACEInfo(param0: native.Array<number>): org.jmrtd.lds.PACEInfo;
				public getParameterId(): java.math.BigInteger;
				public static toCipherAlgorithm(param0: string): string;
				public getDERObject(): org.bouncycastle.asn1.ASN1Primitive;
			}
			export module PACEInfo {
				export class MappingType {
					public static class: java.lang.Class<org.jmrtd.lds.PACEInfo.MappingType>;
					public static GM: org.jmrtd.lds.PACEInfo.MappingType;
					public static IM: org.jmrtd.lds.PACEInfo.MappingType;
					public static CAM: org.jmrtd.lds.PACEInfo.MappingType;
					public static values(): native.Array<org.jmrtd.lds.PACEInfo.MappingType>;
					public static valueOf(param0: string): org.jmrtd.lds.PACEInfo.MappingType;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class SODFile extends org.jmrtd.lds.AbstractTaggedLDSFile {
				public static class: java.lang.Class<org.jmrtd.lds.SODFile>;
				public getSerialNumber(): java.math.BigInteger;
				public getDigestEncryptionAlgorithmParams(): java.security.spec.AlgorithmParameterSpec;
				public getEContent(): native.Array<number>;
				public readContent(param0: java.io.InputStream): void;
				public getSignerInfoDigestAlgorithm(): string;
				public constructor(param0: string, param1: string, param2: java.util.Map<java.lang.Integer,native.Array<number>>, param3: native.Array<number>, param4: java.security.cert.X509Certificate);
				public constructor(param0: number, param1: java.io.InputStream);
				public getDigestAlgorithm(): string;
				public getLDSVersion(): string;
				public hashCode(): number;
				public getUnicodeVersion(): string;
				public equals(param0: any): boolean;
				public writeContent(param0: java.io.OutputStream): void;
				public getEncryptedDigest(): native.Array<number>;
				public getDocSigningCertificate(): java.security.cert.X509Certificate;
				public constructor(param0: string, param1: string, param2: java.util.Map<java.lang.Integer,native.Array<number>>, param3: java.security.PrivateKey, param4: java.security.cert.X509Certificate, param5: string, param6: string, param7: string);
				public getDigestEncryptionAlgorithm(): string;
				public getIssuerX500Principal(): javax.security.auth.x500.X500Principal;
				public constructor(param0: string, param1: string, param2: java.util.Map<java.lang.Integer,native.Array<number>>, param3: java.security.PrivateKey, param4: java.security.cert.X509Certificate);
				public toString(): string;
				public constructor(param0: java.io.InputStream);
				public getLength(): number;
				public constructor(param0: string, param1: string, param2: java.util.Map<java.lang.Integer,native.Array<number>>, param3: java.security.PrivateKey, param4: java.security.cert.X509Certificate, param5: string);
				public constructor(param0: number);
				public getDataGroupHashes(): java.util.Map<java.lang.Integer,native.Array<number>>;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export abstract class SecurityInfo extends org.jmrtd.lds.AbstractLDSInfo {
				public static class: java.lang.Class<org.jmrtd.lds.SecurityInfo>;
				public static ID_AA: string;
				public static ID_PK_DH: string;
				public static ID_PK_ECDH: string;
				public static ID_CA_DH_3DES_CBC_CBC: string;
				public static ID_CA_ECDH_3DES_CBC_CBC: string;
				public static ID_CA_DH_AES_CBC_CMAC_128: string;
				public static ID_CA_DH_AES_CBC_CMAC_192: string;
				public static ID_CA_DH_AES_CBC_CMAC_256: string;
				public static ID_CA_ECDH_AES_CBC_CMAC_128: string;
				public static ID_CA_ECDH_AES_CBC_CMAC_192: string;
				public static ID_CA_ECDH_AES_CBC_CMAC_256: string;
				public static ID_TA: string;
				public static ID_TA_RSA: string;
				public static ID_TA_RSA_V1_5_SHA_1: string;
				public static ID_TA_RSA_V1_5_SHA_256: string;
				public static ID_TA_RSA_PSS_SHA_1: string;
				public static ID_TA_RSA_PSS_SHA_256: string;
				public static ID_TA_ECDSA: string;
				public static ID_TA_ECDSA_SHA_1: string;
				public static ID_TA_ECDSA_SHA_224: string;
				public static ID_TA_ECDSA_SHA_256: string;
				public static ID_EC_PUBLIC_KEY_TYPE: string;
				public static ID_EC_PUBLIC_KEY: string;
				public static ID_PACE: string;
				public static ID_PACE_DH_GM: string;
				public static ID_PACE_DH_GM_3DES_CBC_CBC: string;
				public static ID_PACE_DH_GM_AES_CBC_CMAC_128: string;
				public static ID_PACE_DH_GM_AES_CBC_CMAC_192: string;
				public static ID_PACE_DH_GM_AES_CBC_CMAC_256: string;
				public static ID_PACE_ECDH_GM: string;
				public static ID_PACE_ECDH_GM_3DES_CBC_CBC: string;
				public static ID_PACE_ECDH_GM_AES_CBC_CMAC_128: string;
				public static ID_PACE_ECDH_GM_AES_CBC_CMAC_192: string;
				public static ID_PACE_ECDH_GM_AES_CBC_CMAC_256: string;
				public static ID_PACE_DH_IM: string;
				public static ID_PACE_DH_IM_3DES_CBC_CBC: string;
				public static ID_PACE_DH_IM_AES_CBC_CMAC_128: string;
				public static ID_PACE_DH_IM_AES_CBC_CMAC_192: string;
				public static ID_PACE_DH_IM_AES_CBC_CMAC_256: string;
				public static ID_PACE_ECDH_IM: string;
				public static ID_PACE_ECDH_IM_3DES_CBC_CBC: string;
				public static ID_PACE_ECDH_IM_AES_CBC_CMAC_128: string;
				public static ID_PACE_ECDH_IM_AES_CBC_CMAC_192: string;
				public static ID_PACE_ECDH_IM_AES_CBC_CMAC_256: string;
				public static ID_PACE_ECDH_CAM: string;
				public static ID_PACE_ECDH_CAM_AES_CBC_CMAC_128: string;
				public static ID_PACE_ECDH_CAM_AES_CBC_CMAC_192: string;
				public static ID_PACE_ECDH_CAM_AES_CBC_CMAC_256: string;
				public writeObject(param0: java.io.OutputStream): void;
				public getObjectIdentifier(): string;
				public getProtocolOIDString(): string;
				public getEncoded(): native.Array<number>;
				public static getInstance(param0: org.bouncycastle.asn1.ASN1Primitive): org.jmrtd.lds.SecurityInfo;
				public constructor();
				public getDERObject(): org.bouncycastle.asn1.ASN1Primitive;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class SignedDataUtil {
				public static class: java.lang.Class<org.jmrtd.lds.SignedDataUtil>;
				public static RFC_3369_SIGNED_DATA_OID: string;
				public static RFC_3369_CONTENT_TYPE_OID: string;
				public static RFC_3369_MESSAGE_DIGEST_OID: string;
				public static PKCS1_RSA_OID: string;
				public static PKCS1_MD2_WITH_RSA_OID: string;
				public static PKCS1_MD4_WITH_RSA_OID: string;
				public static PKCS1_MD5_WITH_RSA_OID: string;
				public static PKCS1_SHA1_WITH_RSA_OID: string;
				public static PKCS1_MGF1: string;
				public static PKCS1_RSASSA_PSS_OID: string;
				public static PKCS1_SHA256_WITH_RSA_OID: string;
				public static PKCS1_SHA384_WITH_RSA_OID: string;
				public static PKCS1_SHA512_WITH_RSA_OID: string;
				public static PKCS1_SHA224_WITH_RSA_OID: string;
				public static X9_SHA1_WITH_ECDSA_OID: string;
				public static X9_SHA224_WITH_ECDSA_OID: string;
				public static X9_SHA256_WITH_ECDSA_OID: string;
				public static X9_SHA384_WITH_ECDSA_OID: string;
				public static X9_SHA512_WITH_ECDSA_OID: string;
				public static IEEE_P1363_SHA1_OID: string;
				public static createSignedData(param0: string, param1: string, param2: string, param3: org.bouncycastle.asn1.cms.ContentInfo, param4: native.Array<number>, param5: java.security.cert.X509Certificate): org.bouncycastle.asn1.cms.SignedData;
				public static createSignerInfo(param0: string, param1: string, param2: string, param3: org.bouncycastle.asn1.cms.ContentInfo, param4: native.Array<number>, param5: java.security.cert.X509Certificate): org.bouncycastle.asn1.cms.SignerInfo;
				public static getContent(param0: org.bouncycastle.asn1.cms.SignedData): org.bouncycastle.asn1.ASN1Primitive;
				public static getDigestEncryptionAlgorithm(param0: org.bouncycastle.asn1.cms.SignedData): string;
				public static lookupMnemonicByOID(param0: string): string;
				public static createDigestAlgorithms(param0: string): org.bouncycastle.asn1.ASN1Sequence;
				public static readSignedData(param0: java.io.InputStream): org.bouncycastle.asn1.cms.SignedData;
				public static getEncryptedDigest(param0: org.bouncycastle.asn1.cms.SignedData): native.Array<number>;
				public static getObjectFromTaggedObject(param0: org.bouncycastle.asn1.ASN1Encodable): org.bouncycastle.asn1.ASN1Primitive;
				public static getSignerInfoDigestAlgorithm(param0: org.bouncycastle.asn1.cms.SignedData): string;
				public static writeData(param0: org.bouncycastle.asn1.cms.SignedData, param1: java.io.OutputStream): void;
				public static getDigestEncryptionAlgorithmParams(param0: org.bouncycastle.asn1.cms.SignedData): java.security.spec.AlgorithmParameterSpec;
				public static getEContent(param0: org.bouncycastle.asn1.cms.SignedData): native.Array<number>;
				public static createCertificate(param0: java.security.cert.X509Certificate): org.bouncycastle.asn1.ASN1Sequence;
				public static createAuthenticatedAttributes(param0: string, param1: string, param2: org.bouncycastle.asn1.cms.ContentInfo): org.bouncycastle.asn1.ASN1Set;
				public static signData(param0: string, param1: string, param2: string, param3: org.bouncycastle.asn1.cms.ContentInfo, param4: java.security.PrivateKey, param5: string): native.Array<number>;
				public static getIssuerAndSerialNumber(param0: org.bouncycastle.asn1.cms.SignedData): org.bouncycastle.asn1.cms.IssuerAndSerialNumber;
				public static getDocSigningCertificate(param0: org.bouncycastle.asn1.cms.SignedData): java.security.cert.X509Certificate;
				public static lookupOIDByMnemonic(param0: string): string;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export class TerminalAuthenticationInfo extends org.jmrtd.lds.SecurityInfo {
				public static class: java.lang.Class<org.jmrtd.lds.TerminalAuthenticationInfo>;
				public static VERSION_1: number;
				public constructor(param0: number, param1: number);
				public getShortFileId(): number;
				public getVersion(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getObjectIdentifier(): string;
				public getProtocolOIDString(): string;
				public getEncoded(): native.Array<number>;
				public getFileId(): number;
				public toString(): string;
				public constructor();
				public getDERObject(): org.bouncycastle.asn1.ASN1Primitive;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class COMFile extends org.jmrtd.lds.AbstractTaggedLDSFile {
					public static class: java.lang.Class<org.jmrtd.lds.icao.COMFile>;
					public constructor(param0: number, param1: java.io.InputStream);
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: native.Array<number>);
					public constructor(param0: string, param1: string, param2: native.Array<number>);
					public getLength(): number;
					public writeContent(param0: java.io.OutputStream): void;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: java.io.InputStream);
					public getLDSVersion(): string;
					public getTagList(): native.Array<number>;
					public readContent(param0: java.io.InputStream): void;
					public hashCode(): number;
					public constructor(param0: number);
					public getUnicodeVersion(): string;
					public insertTag(param0: java.lang.Integer): void;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class DG11File extends org.jmrtd.lds.DataGroup {
					public static class: java.lang.Class<org.jmrtd.lds.icao.DG11File>;
					public static TAG_LIST_TAG: number;
					public static FULL_NAME_TAG: number;
					public static OTHER_NAME_TAG: number;
					public static PERSONAL_NUMBER_TAG: number;
					public static FULL_DATE_OF_BIRTH_TAG: number;
					public static PLACE_OF_BIRTH_TAG: number;
					public static PERMANENT_ADDRESS_TAG: number;
					public static TELEPHONE_TAG: number;
					public static PROFESSION_TAG: number;
					public static TITLE_TAG: number;
					public static PERSONAL_SUMMARY_TAG: number;
					public static PROOF_OF_CITIZENSHIP_TAG: number;
					public static OTHER_VALID_TD_NUMBERS_TAG: number;
					public static CUSTODY_INFORMATION_TAG: number;
					public static CONTENT_SPECIFIC_CONSTRUCTED_TAG: number;
					public static COUNT_TAG: number;
					public getPermanentAddress(): java.util.List<string>;
					public getTitle(): string;
					public getFullDateOfBirth(): java.util.Date;
					public getPlaceOfBirth(): java.util.List<string>;
					public getLength(): number;
					public getProfession(): string;
					public writeContent(param0: java.io.OutputStream): void;
					public getPersonalSummary(): string;
					public getOtherNames(): java.util.List<string>;
					public toString(): string;
					public constructor(param0: java.io.InputStream);
					public getProofOfCitizenship(): native.Array<number>;
					public hashCode(): number;
					public constructor(param0: number);
					public constructor(param0: number, param1: java.io.InputStream);
					public getPersonalNumber(): string;
					public getTelephone(): string;
					public constructor(param0: string, param1: java.util.List<string>, param2: string, param3: java.util.Date, param4: java.util.List<string>, param5: java.util.List<string>, param6: string, param7: string, param8: string, param9: string, param10: native.Array<number>, param11: java.util.List<string>, param12: string);
					public getTagPresenceList(): java.util.List<java.lang.Integer>;
					public equals(param0: any): boolean;
					public getTag(): number;
					public getCustodyInformation(): string;
					public readContent(param0: java.io.InputStream): void;
					public getOtherValidTDNumbers(): java.util.List<string>;
					public getNameOfHolder(): string;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class DG12File extends org.jmrtd.lds.DataGroup {
					public static class: java.lang.Class<org.jmrtd.lds.icao.DG12File>;
					public static ISSUING_AUTHORITY_TAG: number;
					public static DATE_OF_ISSUE_TAG: number;
					public static NAME_OF_OTHER_PERSON_TAG: number;
					public static ENDORSEMENTS_AND_OBSERVATIONS_TAG: number;
					public static TAX_OR_EXIT_REQUIREMENTS_TAG: number;
					public static IMAGE_OF_FRONT_TAG: number;
					public static IMAGE_OF_REAR_TAG: number;
					public static DATE_AND_TIME_OF_PERSONALIZATION: number;
					public static PERSONALIZATION_SYSTEM_SERIAL_NUMBER_TAG: number;
					public static CONTENT_SPECIFIC_CONSTRUCTED_TAG: number;
					public static COUNT_TAG: number;
					public getPersonalizationSystemSerialNumber(): string;
					public getEndorsementsAndObservations(): string;
					public constructor(param0: number, param1: java.io.InputStream);
					public getDateAndTimeOfPersonalization(): java.util.Date;
					public getImageOfRear(): native.Array<number>;
					public constructor(param0: string, param1: java.util.Date, param2: java.util.List<string>, param3: string, param4: string, param5: native.Array<number>, param6: native.Array<number>, param7: java.util.Date, param8: string);
					public getLength(): number;
					public writeContent(param0: java.io.OutputStream): void;
					public getIssuingAuthority(): string;
					public getTagPresenceList(): java.util.List<java.lang.Integer>;
					public equals(param0: any): boolean;
					public getTaxOrExitRequirements(): string;
					public getImageOfFront(): native.Array<number>;
					public toString(): string;
					public getTag(): number;
					public constructor(param0: java.io.InputStream);
					public getNamesOfOtherPersons(): java.util.List<string>;
					public readContent(param0: java.io.InputStream): void;
					public hashCode(): number;
					public getDateOfIssue(): java.util.Date;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class DG14File extends org.jmrtd.lds.DataGroup {
					public static class: java.lang.Class<org.jmrtd.lds.icao.DG14File>;
					public constructor(param0: number, param1: java.io.InputStream);
					public getChipAuthenticationPublicKeyInfos(): java.util.List<org.jmrtd.lds.ChipAuthenticationPublicKeyInfo>;
					public constructor(param0: java.util.Collection<org.jmrtd.lds.SecurityInfo>);
					public getChipAuthenticationInfos(): java.util.List<org.jmrtd.lds.ChipAuthenticationInfo>;
					public getLength(): number;
					public getActiveAuthenticationInfos(): java.util.List<org.jmrtd.lds.ActiveAuthenticationInfo>;
					public writeContent(param0: java.io.OutputStream): void;
					public getSecurityInfos(): java.util.Collection<org.jmrtd.lds.SecurityInfo>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: java.io.InputStream);
					public readContent(param0: java.io.InputStream): void;
					public hashCode(): number;
					public constructor(param0: number);
					public getTerminalAuthenticationInfos(): java.util.List<org.jmrtd.lds.TerminalAuthenticationInfo>;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class DG15File extends org.jmrtd.lds.DataGroup {
					public static class: java.lang.Class<org.jmrtd.lds.icao.DG15File>;
					public equals(param0: any): boolean;
					public constructor(param0: number, param1: java.io.InputStream);
					public toString(): string;
					public constructor(param0: java.io.InputStream);
					public constructor(param0: java.security.PublicKey);
					public getLength(): number;
					public writeContent(param0: java.io.OutputStream): void;
					public readContent(param0: java.io.InputStream): void;
					public getPublicKey(): java.security.PublicKey;
					public hashCode(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class DG1File extends org.jmrtd.lds.DataGroup {
					public static class: java.lang.Class<org.jmrtd.lds.icao.DG1File>;
					public equals(param0: any): boolean;
					public constructor(param0: number, param1: java.io.InputStream);
					public toString(): string;
					public constructor(param0: java.io.InputStream);
					public getLength(): number;
					public writeContent(param0: java.io.OutputStream): void;
					public readContent(param0: java.io.InputStream): void;
					public constructor(param0: org.jmrtd.lds.icao.MRZInfo);
					public hashCode(): number;
					public constructor(param0: number);
					public getMRZInfo(): org.jmrtd.lds.icao.MRZInfo;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class DG2File extends org.jmrtd.lds.CBEFFDataGroup<org.jmrtd.lds.iso19794.FaceInfo> {
					public static class: java.lang.Class<org.jmrtd.lds.icao.DG2File>;
					public getFaceInfos(): java.util.List<org.jmrtd.lds.iso19794.FaceInfo>;
					public constructor(param0: number, param1: java.io.InputStream);
					public toString(): string;
					public constructor(param0: number, param1: java.util.List<any>);
					public constructor(param0: java.io.InputStream);
					public removeFaceInfo(param0: number): void;
					public addFaceInfo(param0: org.jmrtd.lds.iso19794.FaceInfo): void;
					public getLength(): number;
					public constructor(param0: java.util.List<org.jmrtd.lds.iso19794.FaceInfo>);
					public writeContent(param0: java.io.OutputStream): void;
					public readContent(param0: java.io.InputStream): void;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class DG3File extends org.jmrtd.lds.CBEFFDataGroup<org.jmrtd.lds.iso19794.FingerInfo> {
					public static class: java.lang.Class<org.jmrtd.lds.icao.DG3File>;
					public constructor(param0: number, param1: java.io.InputStream);
					public getLength(): number;
					public writeContent(param0: java.io.OutputStream): void;
					public constructor(param0: java.util.List<org.jmrtd.lds.iso19794.FingerInfo>);
					public constructor(param0: java.util.List<org.jmrtd.lds.iso19794.FingerInfo>, param1: boolean);
					public getFingerInfos(): java.util.List<org.jmrtd.lds.iso19794.FingerInfo>;
					public toString(): string;
					public constructor(param0: number, param1: java.util.List<any>);
					public constructor(param0: java.io.InputStream);
					public addFingerInfo(param0: org.jmrtd.lds.iso19794.FingerInfo): void;
					public removeFingerInfo(param0: number): void;
					public readContent(param0: java.io.InputStream): void;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class DG4File extends org.jmrtd.lds.CBEFFDataGroup<org.jmrtd.lds.iso19794.IrisInfo> {
					public static class: java.lang.Class<org.jmrtd.lds.icao.DG4File>;
					public constructor(param0: number, param1: java.io.InputStream);
					public constructor(param0: java.util.List<org.jmrtd.lds.iso19794.IrisInfo>, param1: boolean);
					public getLength(): number;
					public writeContent(param0: java.io.OutputStream): void;
					public removeIrisInfo(param0: number): void;
					public toString(): string;
					public constructor(param0: number, param1: java.util.List<any>);
					public constructor(param0: java.io.InputStream);
					public constructor(param0: java.util.List<org.jmrtd.lds.iso19794.IrisInfo>);
					public readContent(param0: java.io.InputStream): void;
					public addIrisInfo(param0: org.jmrtd.lds.iso19794.IrisInfo): void;
					public constructor(param0: number);
					public getIrisInfos(): java.util.List<org.jmrtd.lds.iso19794.IrisInfo>;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class DG5File extends org.jmrtd.lds.DisplayedImageDataGroup {
					public static class: java.lang.Class<org.jmrtd.lds.icao.DG5File>;
					public constructor(param0: number, param1: java.util.List<org.jmrtd.lds.DisplayedImageInfo>, param2: number);
					public constructor(param0: number, param1: java.io.InputStream);
					public constructor(param0: java.io.InputStream);
					public getLength(): number;
					public constructor(param0: java.util.List<org.jmrtd.lds.DisplayedImageInfo>);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class DG6File extends org.jmrtd.lds.DisplayedImageDataGroup {
					public static class: java.lang.Class<org.jmrtd.lds.icao.DG6File>;
					public constructor(param0: number, param1: java.util.List<org.jmrtd.lds.DisplayedImageInfo>, param2: number);
					public constructor(param0: number, param1: java.io.InputStream);
					public constructor(param0: java.io.InputStream);
					public getLength(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class DG7File extends org.jmrtd.lds.DisplayedImageDataGroup {
					public static class: java.lang.Class<org.jmrtd.lds.icao.DG7File>;
					public constructor(param0: number, param1: java.util.List<org.jmrtd.lds.DisplayedImageInfo>, param2: number);
					public constructor(param0: number, param1: java.io.InputStream);
					public constructor(param0: java.io.InputStream);
					public getLength(): number;
					public constructor(param0: java.util.List<org.jmrtd.lds.DisplayedImageInfo>);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class ICAOCountry {
					public static class: java.lang.Class<org.jmrtd.lds.icao.ICAOCountry>;
					public static DE: org.jmrtd.lds.icao.ICAOCountry;
					public static GBD: org.jmrtd.lds.icao.ICAOCountry;
					public static GBN: org.jmrtd.lds.icao.ICAOCountry;
					public static GBO: org.jmrtd.lds.icao.ICAOCountry;
					public static GBP: org.jmrtd.lds.icao.ICAOCountry;
					public static GBS: org.jmrtd.lds.icao.ICAOCountry;
					public static UNO: org.jmrtd.lds.icao.ICAOCountry;
					public static UNA: org.jmrtd.lds.icao.ICAOCountry;
					public static UNK: org.jmrtd.lds.icao.ICAOCountry;
					public static XOM: org.jmrtd.lds.icao.ICAOCountry;
					public static XCC: org.jmrtd.lds.icao.ICAOCountry;
					public static XPO: org.jmrtd.lds.icao.ICAOCountry;
					public static XXA: org.jmrtd.lds.icao.ICAOCountry;
					public static XXB: org.jmrtd.lds.icao.ICAOCountry;
					public static XXC: org.jmrtd.lds.icao.ICAOCountry;
					public static XXX: org.jmrtd.lds.icao.ICAOCountry;
					public static getInstance(param0: string): net.sf.scuba.data.Country;
					public getNationality(): string;
					public valueOf(): number;
					public getName(): string;
					public toAlpha2Code(): string;
					public toAlpha3Code(): string;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class MRZFieldTransformer {
					public static class: java.lang.Class<org.jmrtd.lds.icao.MRZFieldTransformer>;
					/**
					 * Constructs a new instance of the org.jmrtd.lds.icao.MRZFieldTransformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						truncateNames(param0: string, param1: string, param2: number): native.Array<string>;
						transliterate(param0: string): string;
					});
					public constructor();
					public truncateNames(param0: string, param1: string, param2: number): native.Array<string>;
					public transliterate(param0: string): string;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module icao {
				export class MRZInfo extends org.jmrtd.lds.AbstractLDSInfo {
					public static class: java.lang.Class<org.jmrtd.lds.icao.MRZInfo>;
					public static DOC_TYPE_UNSPECIFIED: number;
					public static DOC_TYPE_ID1: number;
					public static DOC_TYPE_ID2: number;
					public static DOC_TYPE_ID3: number;
					public setSecondaryIdentifierComponents(param0: native.Array<string>): void;
					public getNationality(): string;
					public constructor(param0: string);
					public setOptionalData2(param0: string): void;
					public getEncoded(): native.Array<number>;
					public setNationality(param0: string): void;
					public writeObject(param0: java.io.OutputStream): void;
					public setPersonalNumber(param0: string): void;
					public static equalsModuloFillerChars(param0: string, param1: string): boolean;
					public setDateOfExpiry(param0: string): void;
					public setPrimaryIdentifier(param0: string): void;
					public toString(): string;
					public constructor();
					public getDateOfBirth(): string;
					public getIssuingState(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: net.sf.scuba.data.Gender, param8: string, param9: string);
					public setGender(param0: net.sf.scuba.data.Gender): void;
					public hashCode(): number;
					public setDateOfBirth(param0: string): void;
					public getDocumentType(): number;
					public setDocumentCode(param0: string): void;
					public static checkDigit(param0: string): string;
					public getDocumentNumber(): string;
					public getPrimaryIdentifier(): string;
					public getPersonalNumber(): string;
					public setIssuingState(param0: string): void;
					public getSecondaryIdentifier(): string;
					public setSecondaryIdentifiers(param0: string): void;
					public setDocumentNumber(param0: string): void;
					public getSecondaryIdentifierComponents(): native.Array<string>;
					public constructor(param0: java.io.InputStream, param1: number);
					public getOptionalData1(): string;
					public equals(param0: any): boolean;
					public getDocumentCode(): string;
					public getGender(): net.sf.scuba.data.Gender;
					public getDateOfExpiry(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: net.sf.scuba.data.Gender, param6: string, param7: string, param8: string, param9: string, param10: string);
					public getOptionalData2(): string;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module iso19794 {
				export class FaceImageInfo extends org.jmrtd.lds.AbstractImageInfo {
					public static class: java.lang.Class<org.jmrtd.lds.iso19794.FaceImageInfo>;
					public static EYE_COLOR_UNSPECIFIED: number;
					public static EYE_COLOR_BLACK: number;
					public static EYE_COLOR_BLUE: number;
					public static EYE_COLOR_BROWN: number;
					public static EYE_COLOR_GRAY: number;
					public static EYE_COLOR_GREEN: number;
					public static EYE_COLOR_MULTI_COLORED: number;
					public static EYE_COLOR_PINK: number;
					public static EYE_COLOR_UNKNOWN: number;
					public static HAIR_COLOR_UNSPECIFIED: number;
					public static HAIR_COLOR_BALD: number;
					public static HAIR_COLOR_BLACK: number;
					public static HAIR_COLOR_BLONDE: number;
					public static HAIR_COLOR_BROWN: number;
					public static HAIR_COLOR_GRAY: number;
					public static HAIR_COLOR_WHITE: number;
					public static HAIR_COLOR_RED: number;
					public static HAIR_COLOR_GREEN: number;
					public static HAIR_COLOR_BLUE: number;
					public static HAIR_COLOR_UNKNOWN: number;
					public static EXPRESSION_UNSPECIFIED: number;
					public static EXPRESSION_NEUTRAL: number;
					public static EXPRESSION_SMILE_CLOSED: number;
					public static EXPRESSION_SMILE_OPEN: number;
					public static EXPRESSION_RAISED_EYEBROWS: number;
					public static EXPRESSION_EYES_LOOKING_AWAY: number;
					public static EXPRESSION_SQUINTING: number;
					public static EXPRESSION_FROWNING: number;
					public static FACE_IMAGE_TYPE_BASIC: number;
					public static FACE_IMAGE_TYPE_FULL_FRONTAL: number;
					public static FACE_IMAGE_TYPE_TOKEN_FRONTAL: number;
					public static IMAGE_DATA_TYPE_JPEG: number;
					public static IMAGE_DATA_TYPE_JPEG2000: number;
					public static IMAGE_COLOR_SPACE_UNSPECIFIED: number;
					public static IMAGE_COLOR_SPACE_RGB24: number;
					public static IMAGE_COLOR_SPACE_YUV422: number;
					public static IMAGE_COLOR_SPACE_GRAY8: number;
					public static IMAGE_COLOR_SPACE_OTHER: number;
					public static SOURCE_TYPE_UNSPECIFIED: number;
					public static SOURCE_TYPE_STATIC_PHOTO_UNKNOWN_SOURCE: number;
					public static SOURCE_TYPE_STATIC_PHOTO_DIGITAL_CAM: number;
					public static SOURCE_TYPE_STATIC_PHOTO_SCANNER: number;
					public static SOURCE_TYPE_VIDEO_FRAME_UNKNOWN_SOURCE: number;
					public static SOURCE_TYPE_VIDEO_FRAME_ANALOG_CAM: number;
					public static SOURCE_TYPE_VIDEO_FRAME_DIGITAL_CAM: number;
					public static SOURCE_TYPE_UNKNOWN: number;
					public getFaceImageType(): number;
					public getType(): number;
					public getImageInputStream(): java.io.InputStream;
					public constructor(param0: number, param1: string);
					public getImageDataType(): number;
					public getMimeType(): string;
					public getDeviceType(): number;
					public getFeatureMask(): number;
					public writeObject(param0: java.io.OutputStream): void;
					public getRecordLength(): number;
					public toString(): string;
					public constructor(param0: number, param1: number, param2: number, param3: java.io.InputStream, param4: number, param5: string);
					public constructor(param0: java.io.InputStream);
					public getHairColor(): number;
					public getQuality(): number;
					public getEyeColor(): org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor;
					public getColorSpace(): number;
					public constructor(param0: number);
					public readObject(param0: java.io.InputStream): void;
					public getPoseAngleUncertainty(): native.Array<number>;
					public getFeaturePoints(): native.Array<org.jmrtd.lds.iso19794.FaceImageInfo.FeaturePoint>;
					public getHeight(): number;
					public getWidth(): number;
					public getPoseAngle(): native.Array<number>;
					public constructor(param0: net.sf.scuba.data.Gender, param1: org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor, param2: number, param3: number, param4: number, param5: native.Array<number>, param6: native.Array<number>, param7: number, param8: number, param9: number, param10: number, param11: number, param12: native.Array<org.jmrtd.lds.iso19794.FaceImageInfo.FeaturePoint>, param13: number, param14: number, param15: java.io.InputStream, param16: number, param17: number);
					public getSourceType(): number;
					public getImageLength(): number;
					public getExpression(): number;
					public getGender(): net.sf.scuba.data.Gender;
				}
				export module FaceImageInfo {
					export class Expression {
						public static class: java.lang.Class<org.jmrtd.lds.iso19794.FaceImageInfo.Expression>;
						public static UNSPECIFIED: org.jmrtd.lds.iso19794.FaceImageInfo.Expression;
						public static NEUTRAL: org.jmrtd.lds.iso19794.FaceImageInfo.Expression;
						public static SMILE_CLOSED: org.jmrtd.lds.iso19794.FaceImageInfo.Expression;
						public static SMILE_OPEN: org.jmrtd.lds.iso19794.FaceImageInfo.Expression;
						public static RAISED_EYEBROWS: org.jmrtd.lds.iso19794.FaceImageInfo.Expression;
						public static EYES_LOOKING_AWAY: org.jmrtd.lds.iso19794.FaceImageInfo.Expression;
						public static SQUINTING: org.jmrtd.lds.iso19794.FaceImageInfo.Expression;
						public static FROWNING: org.jmrtd.lds.iso19794.FaceImageInfo.Expression;
						public static valueOf(param0: string): org.jmrtd.lds.iso19794.FaceImageInfo.Expression;
						public static values(): native.Array<org.jmrtd.lds.iso19794.FaceImageInfo.Expression>;
					}
					export abstract class EyeColor {
						public static class: java.lang.Class<org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor>;
						public static UNSPECIFIED: org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor;
						public static BLACK: org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor;
						public static BLUE: org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor;
						public static BROWN: org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor;
						public static GRAY: org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor;
						public static GREEN: org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor;
						public static MULTI_COLORED: org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor;
						public static PINK: org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor;
						public static UNKNOWN: org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor;
						public static values(): native.Array<org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor>;
						public static valueOf(param0: string): org.jmrtd.lds.iso19794.FaceImageInfo.EyeColor;
						public toInt(): number;
					}
					export class FaceImageType {
						public static class: java.lang.Class<org.jmrtd.lds.iso19794.FaceImageInfo.FaceImageType>;
						public static BASIC: org.jmrtd.lds.iso19794.FaceImageInfo.FaceImageType;
						public static FULL_FRONTAL: org.jmrtd.lds.iso19794.FaceImageInfo.FaceImageType;
						public static TOKEN_FRONTAL: org.jmrtd.lds.iso19794.FaceImageInfo.FaceImageType;
						public static values(): native.Array<org.jmrtd.lds.iso19794.FaceImageInfo.FaceImageType>;
						public static valueOf(param0: string): org.jmrtd.lds.iso19794.FaceImageInfo.FaceImageType;
					}
					export class FeaturePoint {
						public static class: java.lang.Class<org.jmrtd.lds.iso19794.FaceImageInfo.FeaturePoint>;
						public getMinorCode(): number;
						public getMajorCode(): number;
						public getX(): number;
						public getY(): number;
						public getType(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
						public toString(): string;
					}
					export class Features {
						public static class: java.lang.Class<org.jmrtd.lds.iso19794.FaceImageInfo.Features>;
						public static FEATURES_ARE_SPECIFIED: org.jmrtd.lds.iso19794.FaceImageInfo.Features;
						public static GLASSES: org.jmrtd.lds.iso19794.FaceImageInfo.Features;
						public static MOUSTACHE: org.jmrtd.lds.iso19794.FaceImageInfo.Features;
						public static BEARD: org.jmrtd.lds.iso19794.FaceImageInfo.Features;
						public static TEETH_VISIBLE: org.jmrtd.lds.iso19794.FaceImageInfo.Features;
						public static BLINK: org.jmrtd.lds.iso19794.FaceImageInfo.Features;
						public static MOUTH_OPEN: org.jmrtd.lds.iso19794.FaceImageInfo.Features;
						public static LEFT_EYE_PATCH: org.jmrtd.lds.iso19794.FaceImageInfo.Features;
						public static RIGHT_EYE_PATCH: org.jmrtd.lds.iso19794.FaceImageInfo.Features;
						public static DARK_GLASSES: org.jmrtd.lds.iso19794.FaceImageInfo.Features;
						public static DISTORTING_MEDICAL_CONDITION: org.jmrtd.lds.iso19794.FaceImageInfo.Features;
						public static values(): native.Array<org.jmrtd.lds.iso19794.FaceImageInfo.Features>;
						public static valueOf(param0: string): org.jmrtd.lds.iso19794.FaceImageInfo.Features;
					}
					export class HairColor {
						public static class: java.lang.Class<org.jmrtd.lds.iso19794.FaceImageInfo.HairColor>;
						public static UNSPECIFIED: org.jmrtd.lds.iso19794.FaceImageInfo.HairColor;
						public static BALD: org.jmrtd.lds.iso19794.FaceImageInfo.HairColor;
						public static BLACK: org.jmrtd.lds.iso19794.FaceImageInfo.HairColor;
						public static BLONDE: org.jmrtd.lds.iso19794.FaceImageInfo.HairColor;
						public static BROWN: org.jmrtd.lds.iso19794.FaceImageInfo.HairColor;
						public static GRAY: org.jmrtd.lds.iso19794.FaceImageInfo.HairColor;
						public static WHITE: org.jmrtd.lds.iso19794.FaceImageInfo.HairColor;
						public static RED: org.jmrtd.lds.iso19794.FaceImageInfo.HairColor;
						public static GREEN: org.jmrtd.lds.iso19794.FaceImageInfo.HairColor;
						public static BLUE: org.jmrtd.lds.iso19794.FaceImageInfo.HairColor;
						public static UNKNOWN: org.jmrtd.lds.iso19794.FaceImageInfo.HairColor;
						public static values(): native.Array<org.jmrtd.lds.iso19794.FaceImageInfo.HairColor>;
						public static valueOf(param0: string): org.jmrtd.lds.iso19794.FaceImageInfo.HairColor;
					}
					export class ImageColorSpace {
						public static class: java.lang.Class<org.jmrtd.lds.iso19794.FaceImageInfo.ImageColorSpace>;
						public static UNSPECIFIED: org.jmrtd.lds.iso19794.FaceImageInfo.ImageColorSpace;
						public static RGB24: org.jmrtd.lds.iso19794.FaceImageInfo.ImageColorSpace;
						public static YUV422: org.jmrtd.lds.iso19794.FaceImageInfo.ImageColorSpace;
						public static GRAY8: org.jmrtd.lds.iso19794.FaceImageInfo.ImageColorSpace;
						public static OTHER: org.jmrtd.lds.iso19794.FaceImageInfo.ImageColorSpace;
						public static values(): native.Array<org.jmrtd.lds.iso19794.FaceImageInfo.ImageColorSpace>;
						public static valueOf(param0: string): org.jmrtd.lds.iso19794.FaceImageInfo.ImageColorSpace;
					}
					export class ImageDataType {
						public static class: java.lang.Class<org.jmrtd.lds.iso19794.FaceImageInfo.ImageDataType>;
						public static TYPE_JPEG: org.jmrtd.lds.iso19794.FaceImageInfo.ImageDataType;
						public static TYPE_JPEG2000: org.jmrtd.lds.iso19794.FaceImageInfo.ImageDataType;
						public static values(): native.Array<org.jmrtd.lds.iso19794.FaceImageInfo.ImageDataType>;
						public static valueOf(param0: string): org.jmrtd.lds.iso19794.FaceImageInfo.ImageDataType;
					}
					export class SourceType {
						public static class: java.lang.Class<org.jmrtd.lds.iso19794.FaceImageInfo.SourceType>;
						public static UNSPECIFIED: org.jmrtd.lds.iso19794.FaceImageInfo.SourceType;
						public static STATIC_PHOTO_UNKNOWN_SOURCE: org.jmrtd.lds.iso19794.FaceImageInfo.SourceType;
						public static STATIC_PHOTO_DIGITAL_CAM: org.jmrtd.lds.iso19794.FaceImageInfo.SourceType;
						public static STATIC_PHOTO_SCANNER: org.jmrtd.lds.iso19794.FaceImageInfo.SourceType;
						public static VIDEO_FRAME_UNKNOWN_SOURCE: org.jmrtd.lds.iso19794.FaceImageInfo.SourceType;
						public static VIDEO_FRAME_ANALOG_CAM: org.jmrtd.lds.iso19794.FaceImageInfo.SourceType;
						public static VIDEO_FRAME_DIGITAL_CAM: org.jmrtd.lds.iso19794.FaceImageInfo.SourceType;
						public static UNKNOWN: org.jmrtd.lds.iso19794.FaceImageInfo.SourceType;
						public static values(): native.Array<org.jmrtd.lds.iso19794.FaceImageInfo.SourceType>;
						public static valueOf(param0: string): org.jmrtd.lds.iso19794.FaceImageInfo.SourceType;
					}
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module iso19794 {
				export class FaceInfo extends org.jmrtd.lds.AbstractListInfo<org.jmrtd.lds.iso19794.FaceImageInfo> implements org.jmrtd.cbeff.BiometricDataBlock  {
					public static class: java.lang.Class<org.jmrtd.lds.iso19794.FaceInfo>;
					public readObject(param0: java.io.InputStream): void;
					public removeFaceImageInfo(param0: number): void;
					public constructor(param0: org.jmrtd.cbeff.StandardBiometricHeader, param1: java.io.InputStream);
					public constructor(param0: java.io.InputStream);
					public constructor();
					public addFaceImageInfo(param0: org.jmrtd.lds.iso19794.FaceImageInfo): void;
					public constructor(param0: java.util.List<org.jmrtd.lds.iso19794.FaceImageInfo>);
					public constructor(param0: org.jmrtd.cbeff.StandardBiometricHeader, param1: java.util.List<org.jmrtd.lds.iso19794.FaceImageInfo>);
					public getEncoded(): native.Array<number>;
					public getStandardBiometricHeader(): org.jmrtd.cbeff.StandardBiometricHeader;
					public getFaceImageInfos(): java.util.List<org.jmrtd.lds.iso19794.FaceImageInfo>;
					public writeObject(param0: java.io.OutputStream): void;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module iso19794 {
				export class FingerImageInfo extends org.jmrtd.lds.AbstractImageInfo {
					public static class: java.lang.Class<org.jmrtd.lds.iso19794.FingerImageInfo>;
					public static POSITION_UNKNOWN_FINGER: number;
					public static POSITION_RIGHT_THUMB: number;
					public static POSITION_RIGHT_INDEX_FINGER: number;
					public static POSITION_RIGHT_MIDDLE_FINGER: number;
					public static POSITION_RIGHT_RING_FINGER: number;
					public static POSITION_RIGHT_LITTLE_FINGER: number;
					public static POSITION_LEFT_THUMB: number;
					public static POSITION_LEFT_INDEX_FINGER: number;
					public static POSITION_LEFT_MIDDLE_FINGER: number;
					public static POSITION_LEFT_RING_FINGER: number;
					public static POSITION_LEFT_LITTLE_FINGER: number;
					public static POSITION_PLAIN_RIGHT_FOUR_FINGERS: number;
					public static POSITION_PLAIN_LEFT_FOUR_FINGERS: number;
					public static POSITION_PLAIN_THUMBS: number;
					public static POSITION_UNKNOWN_PALM: number;
					public static POSITION_RIGHT_FULL_PALM: number;
					public static POSITION_RIGHT_WRITER_S_PALM: number;
					public static POSITION_LEFT_FULL_PALM: number;
					public static POSITION_LEFT_WRITER_S_PALM: number;
					public static POSITION_RIGHT_LOWER_PALM: number;
					public static POSITION_RIGHT_UPPER_PALM: number;
					public static POSITION_LEFT_LOWER_PALM: number;
					public static POSITION_LEFT_UPPER_PALM: number;
					public static POSITION_RIGHT_OTHER: number;
					public static POSITION_LEFT_OTHER: number;
					public static POSITION_RIGHT_INTERDIGITAL: number;
					public static POSITION_RIGHT_THENAR: number;
					public static POSITION_RIGHT_HYPOTHENAR: number;
					public static POSITION_LEFT_INTERDIGITAL: number;
					public static POSITION_LEFT_THENAR: number;
					public static POSITION_LEFT_HYPOTHENAR: number;
					public static IMPRESSION_TYPE_LIVE_SCAN_PLAIN: number;
					public static IMPRESSION_TYPE_LIVE_SCAN_ROLLED: number;
					public static IMPRESSION_TYPE_NON_LIVE_SCAN_PLAIN: number;
					public static IMPRESSION_TYPE_NON_LIVE_SCAN_ROLLED: number;
					public static IMPRESSION_TYPE_LATENT: number;
					public static IMPRESSION_TYPE_SWIPE: number;
					public static IMPRESSION_TYPE_LIVE_SCAN_CONTACTLESS: number;
					public getViewCount(): number;
					public readObject(param0: java.io.InputStream): void;
					public getType(): number;
					public getCompressionAlgorithm(): number;
					public getImageInputStream(): java.io.InputStream;
					public getHeight(): number;
					public getImpressionType(): number;
					public constructor(param0: number, param1: string);
					public getWidth(): number;
					public getMimeType(): string;
					public constructor(param0: java.io.InputStream, param1: number);
					public writeObject(param0: java.io.OutputStream): void;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: java.io.InputStream, param8: number, param9: number);
					public getViewNumber(): number;
					public getRecordLength(): number;
					public toString(): string;
					public getFormatType(): native.Array<number>;
					public constructor(param0: number, param1: number, param2: number, param3: java.io.InputStream, param4: number, param5: string);
					public getImageLength(): number;
					public getQuality(): number;
					public getBiometricSubtype(): number;
					public getPosition(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module iso19794 {
				export class FingerInfo extends org.jmrtd.lds.AbstractListInfo<org.jmrtd.lds.iso19794.FingerImageInfo> implements org.jmrtd.cbeff.BiometricDataBlock  {
					public static class: java.lang.Class<org.jmrtd.lds.iso19794.FingerInfo>;
					public static SCALE_UNITS_PPI: number;
					public static SCALE_UNITS_PPCM: number;
					public static COMPRESSION_UNCOMPRESSED_NO_BIT_PACKING: number;
					public static COMPRESSION_UNCOMPRESSED_BIT_PACKED: number;
					public static COMPRESSION_WSQ: number;
					public static COMPRESSION_JPEG: number;
					public static COMPRESSION_JPEG2000: number;
					public static COMPRESSION_PNG: number;
					public readObject(param0: java.io.InputStream): void;
					public constructor(param0: org.jmrtd.cbeff.StandardBiometricHeader, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: java.util.List<org.jmrtd.lds.iso19794.FingerImageInfo>);
					public getCompressionAlgorithm(): number;
					public constructor(param0: org.jmrtd.cbeff.StandardBiometricHeader, param1: java.io.InputStream);
					public getVerticalScanningResolution(): number;
					public getHorizontalImageResolution(): number;
					public getVerticalImageResolution(): number;
					public getEncoded(): native.Array<number>;
					public removeFingerImageInfo(param0: number): void;
					public getStandardBiometricHeader(): org.jmrtd.cbeff.StandardBiometricHeader;
					public getScaleUnits(): number;
					public getFingerImageInfos(): java.util.List<org.jmrtd.lds.iso19794.FingerImageInfo>;
					public writeObject(param0: java.io.OutputStream): void;
					public addFingerImageInfo(param0: org.jmrtd.lds.iso19794.FingerImageInfo): void;
					public getAcquisitionLevel(): number;
					public toString(): string;
					public constructor(param0: java.io.InputStream);
					public getHorizontalScanningResolution(): number;
					public constructor();
					public getDepth(): number;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: java.util.List<org.jmrtd.lds.iso19794.FingerImageInfo>);
					public getCaptureDeviceId(): number;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module iso19794 {
				export class IrisBiometricSubtypeInfo extends org.jmrtd.lds.AbstractListInfo<org.jmrtd.lds.iso19794.IrisImageInfo> {
					public static class: java.lang.Class<org.jmrtd.lds.iso19794.IrisBiometricSubtypeInfo>;
					public static EYE_UNDEF: number;
					public static EYE_RIGHT: number;
					public static EYE_LEFT: number;
					public readObject(param0: java.io.InputStream): void;
					public getEncoded(): native.Array<number>;
					public constructor(param0: java.io.InputStream, param1: number);
					public writeObject(param0: java.io.OutputStream): void;
					public getRecordLength(): number;
					public toString(): string;
					public constructor();
					public removeIrisImageInfo(param0: number): void;
					public constructor(param0: number, param1: number, param2: java.util.List<org.jmrtd.lds.iso19794.IrisImageInfo>);
					public getImageFormat(): number;
					public getBiometricSubtype(): number;
					public getIrisImageInfos(): java.util.List<org.jmrtd.lds.iso19794.IrisImageInfo>;
					public addIrisImageInfo(param0: org.jmrtd.lds.iso19794.IrisImageInfo): void;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module iso19794 {
				export class IrisImageInfo extends org.jmrtd.lds.AbstractImageInfo {
					public static class: java.lang.Class<org.jmrtd.lds.iso19794.IrisImageInfo>;
					public static IMAGE_QUAL_UNDEF: number;
					public static IMAGE_QUAL_LOW_LO: number;
					public static IMAGE_QUAL_LOW_HI: number;
					public static IMAGE_QUAL_MED_LO: number;
					public static IMAGE_QUAL_MED_HI: number;
					public static IMAGE_QUAL_HIGH_LO: number;
					public static IMAGE_QUAL_HIGH_HI: number;
					public readObject(param0: java.io.InputStream): void;
					public getType(): number;
					public getImageInputStream(): java.io.InputStream;
					public getImageNumber(): number;
					public getHeight(): number;
					public constructor(param0: number, param1: string);
					public getWidth(): number;
					public getMimeType(): string;
					public writeObject(param0: java.io.OutputStream): void;
					public getRecordLength(): number;
					public toString(): string;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: java.io.InputStream, param7: number, param8: number);
					public constructor(param0: number, param1: number, param2: number, param3: java.io.InputStream, param4: number, param5: string);
					public getImageLength(): number;
					public getRotationAngle(): number;
					public getQuality(): number;
					public getImageFormat(): number;
					public constructor(param0: number, param1: number, param2: number, param3: java.io.InputStream, param4: number, param5: number);
					public constructor(param0: number);
					public getRotationAngleUncertainty(): number;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module lds {
			export module iso19794 {
				export class IrisInfo extends org.jmrtd.lds.AbstractListInfo<org.jmrtd.lds.iso19794.IrisBiometricSubtypeInfo> implements org.jmrtd.cbeff.BiometricDataBlock  {
					public static class: java.lang.Class<org.jmrtd.lds.iso19794.IrisInfo>;
					public static IMAGEFORMAT_MONO_RAW: number;
					public static IMAGEFORMAT_RGB_RAW: number;
					public static IMAGEFORMAT_MONO_JPEG: number;
					public static IMAGEFORMAT_RGB_JPEG: number;
					public static IMAGEFORMAT_MONO_JPEG_LS: number;
					public static IMAGEFORMAT_RGB_JPEG_LS: number;
					public static IMAGEFORMAT_MONO_JPEG2000: number;
					public static IMAGEFORMAT_RGB_JPEG2000: number;
					public static CAPTURE_DEVICE_UNDEF: number;
					public static ORIENTATION_UNDEF: number;
					public static ORIENTATION_BASE: number;
					public static ORIENTATION_FLIPPED: number;
					public static SCAN_TYPE_UNDEF: number;
					public static SCAN_TYPE_PROGRESSIVE: number;
					public static SCAN_TYPE_INTERLACE_FRAME: number;
					public static SCAN_TYPE_INTERLACE_FIELD: number;
					public static SCAN_TYPE_CORRECTED: number;
					public static IROCC_UNDEF: number;
					public static IROCC_PROCESSED: number;
					public static IROCC_ZEROFILL: number;
					public static IROC_UNITFILL: number;
					public static INTENSITY_DEPTH_UNDEF: number;
					public static TRANS_UNDEF: number;
					public static TRANS_STD: number;
					public static IRBNDY_UNDEF: number;
					public static IRBNDY_PROCESSED: number;
					public constructor(param0: org.jmrtd.cbeff.StandardBiometricHeader, param1: java.io.InputStream);
					public getScanType(): number;
					public getEncoded(): native.Array<number>;
					public getBoundaryExtraction(): number;
					public constructor(param0: org.jmrtd.cbeff.StandardBiometricHeader, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number, param14: native.Array<number>, param15: java.util.List<org.jmrtd.lds.iso19794.IrisBiometricSubtypeInfo>);
					public writeObject(param0: java.io.OutputStream): void;
					public toString(): string;
					public getIrisDiameter(): number;
					public constructor(param0: java.io.InputStream);
					public constructor();
					public getRawImageWidth(): number;
					public getRawImageHeight(): number;
					public getHorizontalOrientation(): number;
					public readObject(param0: java.io.InputStream): void;
					public getVerticalOrientation(): number;
					public getDeviceUniqueId(): native.Array<number>;
					public removeIrisBiometricSubtypeInfo(param0: number): void;
					public getStandardBiometricHeader(): org.jmrtd.cbeff.StandardBiometricHeader;
					public getIrisOcclusion(): number;
					public getImageTransformation(): number;
					public getIntensityDepth(): number;
					public addIrisBiometricSubtypeInfo(param0: org.jmrtd.lds.iso19794.IrisBiometricSubtypeInfo): void;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: native.Array<number>, param14: java.util.List<org.jmrtd.lds.iso19794.IrisBiometricSubtypeInfo>);
					public getOcclusionFilling(): number;
					public getImageFormat(): number;
					public getCaptureDeviceId(): number;
					public getIrisBiometricSubtypeInfos(): java.util.List<org.jmrtd.lds.iso19794.IrisBiometricSubtypeInfo>;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module protocol {
			export class AAProtocol {
				public static class: java.lang.Class<org.jmrtd.protocol.AAProtocol>;
				public doAA(param0: java.security.PublicKey, param1: string, param2: string, param3: native.Array<number>): org.jmrtd.protocol.AAResult;
				public constructor(param0: org.jmrtd.PassportService, param1: org.jmrtd.protocol.SecureMessagingWrapper);
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module protocol {
			export class AAResult {
				public static class: java.lang.Class<org.jmrtd.protocol.AAResult>;
				public getSignatureAlgorithm(): string;
				public getResponse(): native.Array<number>;
				public getDigestAlgorithm(): string;
				public constructor(param0: java.security.PublicKey, param1: string, param2: string, param3: native.Array<number>, param4: native.Array<number>);
				public hashCode(): number;
				public getPublicKey(): java.security.PublicKey;
				public equals(param0: any): boolean;
				public toString(): string;
				public getChallenge(): native.Array<number>;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module protocol {
			export class AESSecureMessagingWrapper extends org.jmrtd.protocol.SecureMessagingWrapper {
				public static class: java.lang.Class<org.jmrtd.protocol.AESSecureMessagingWrapper>;
				public unwrap(param0: net.sf.scuba.smartcards.ResponseAPDU): net.sf.scuba.smartcards.ResponseAPDU;
				public getSendSequenceCounter(): number;
				public getEncryptionKey(): javax.crypto.SecretKey;
				public getMACKey(): javax.crypto.SecretKey;
				public toString(): string;
				public wrap(param0: net.sf.scuba.smartcards.CommandAPDU): net.sf.scuba.smartcards.CommandAPDU;
				public constructor();
				public constructor(param0: javax.crypto.SecretKey, param1: javax.crypto.SecretKey, param2: number);
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module protocol {
			export class BACProtocol {
				public static class: java.lang.Class<org.jmrtd.protocol.BACProtocol>;
				public doBAC(param0: javax.crypto.SecretKey, param1: javax.crypto.SecretKey): org.jmrtd.protocol.BACResult;
				public static computeKeySeedForBAC(param0: org.jmrtd.BACKeySpec): native.Array<number>;
				public static computeSendSequenceCounter(param0: native.Array<number>, param1: native.Array<number>): number;
				public doBAC(param0: org.jmrtd.BACKeySpec): org.jmrtd.protocol.BACResult;
				public constructor(param0: org.jmrtd.PassportService);
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module protocol {
			export class BACResult {
				public static class: java.lang.Class<org.jmrtd.protocol.BACResult>;
				public getBACKey(): org.jmrtd.BACKeySpec;
				public constructor(param0: org.jmrtd.protocol.SecureMessagingWrapper);
				public hashCode(): number;
				public constructor(param0: org.jmrtd.BACKeySpec, param1: org.jmrtd.protocol.SecureMessagingWrapper);
				public getWrapper(): org.jmrtd.protocol.SecureMessagingWrapper;
				public equals(param0: any): boolean;
				public toString(): string;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module protocol {
			export class CAProtocol {
				public static class: java.lang.Class<org.jmrtd.protocol.CAProtocol>;
				public static restartSecureMessaging(param0: string, param1: native.Array<number>): org.jmrtd.protocol.SecureMessagingWrapper;
				public static computeSharedSecret(param0: string, param1: java.security.PublicKey, param2: java.security.PrivateKey): native.Array<number>;
				public static sendPublicKey(param0: org.jmrtd.PassportService, param1: org.jmrtd.protocol.SecureMessagingWrapper, param2: string, param3: java.math.BigInteger, param4: java.security.PublicKey): void;
				public getWrapper(): org.jmrtd.protocol.SecureMessagingWrapper;
				public doCA(param0: java.math.BigInteger, param1: string, param2: string, param3: java.security.PublicKey): org.jmrtd.protocol.CAResult;
				public constructor(param0: org.jmrtd.PassportService, param1: org.jmrtd.protocol.SecureMessagingWrapper);
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module protocol {
			export class CAResult {
				public static class: java.lang.Class<org.jmrtd.protocol.CAResult>;
				public constructor(param0: java.math.BigInteger, param1: java.security.PublicKey, param2: native.Array<number>, param3: java.security.PublicKey, param4: java.security.PrivateKey, param5: org.jmrtd.protocol.SecureMessagingWrapper);
				public getKeyHash(): native.Array<number>;
				public hashCode(): number;
				public getPublicKey(): java.security.PublicKey;
				public getWrapper(): org.jmrtd.protocol.SecureMessagingWrapper;
				public equals(param0: any): boolean;
				public getKeyId(): java.math.BigInteger;
				public toString(): string;
				public getPCDPublicKey(): java.security.PublicKey;
				public getPCDPrivateKey(): java.security.PrivateKey;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module protocol {
			export class DESedeSecureMessagingWrapper extends org.jmrtd.protocol.SecureMessagingWrapper {
				public static class: java.lang.Class<org.jmrtd.protocol.DESedeSecureMessagingWrapper>;
				public static ZERO_IV_PARAM_SPEC: javax.crypto.spec.IvParameterSpec;
				public constructor(param0: javax.crypto.SecretKey, param1: javax.crypto.SecretKey, param2: boolean, param3: number);
				public unwrap(param0: net.sf.scuba.smartcards.ResponseAPDU): net.sf.scuba.smartcards.ResponseAPDU;
				public getSendSequenceCounter(): number;
				public constructor(param0: javax.crypto.SecretKey, param1: javax.crypto.SecretKey, param2: boolean);
				public getEncryptionKey(): javax.crypto.SecretKey;
				public getMACKey(): javax.crypto.SecretKey;
				public constructor(param0: javax.crypto.SecretKey, param1: javax.crypto.SecretKey);
				public toString(): string;
				public wrap(param0: net.sf.scuba.smartcards.CommandAPDU): net.sf.scuba.smartcards.CommandAPDU;
				public constructor();
				public constructor(param0: javax.crypto.SecretKey, param1: javax.crypto.SecretKey, param2: number);
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module protocol {
			export class PACEProtocol {
				public static class: java.lang.Class<org.jmrtd.protocol.PACEProtocol>;
				public doPACE(param0: java.security.spec.KeySpec, param1: string, param2: java.security.spec.AlgorithmParameterSpec): org.jmrtd.protocol.PACEResult;
				public doPACE(param0: javax.crypto.SecretKey, param1: string, param2: java.security.spec.AlgorithmParameterSpec): org.jmrtd.protocol.PACEResult;
				public doPACEStep2GM(param0: string, param1: java.security.spec.AlgorithmParameterSpec, param2: native.Array<number>): java.security.spec.AlgorithmParameterSpec;
				public doPACEStep3GenerateKeyPair(param0: string, param1: java.security.spec.AlgorithmParameterSpec): java.security.KeyPair;
				public static computeKeySeedForPACE(param0: java.security.spec.KeySpec): native.Array<number>;
				public static updateParameterSpec(param0: java.security.PublicKey, param1: java.security.PrivateKey): java.security.PublicKey;
				public static deriveStaticPACEKey(param0: java.security.spec.KeySpec, param1: string): javax.crypto.SecretKey;
				public doPACEStep4(param0: string, param1: org.jmrtd.lds.PACEInfo.MappingType, param2: java.security.KeyPair, param3: java.security.PublicKey, param4: javax.crypto.SecretKey): native.Array<number>;
				public doPACEStep2(param0: org.jmrtd.lds.PACEInfo.MappingType, param1: string, param2: java.security.spec.AlgorithmParameterSpec, param3: native.Array<number>): java.security.spec.AlgorithmParameterSpec;
				public doPACEStep3ExchangePublicKeys(param0: java.security.PublicKey, param1: java.security.spec.AlgorithmParameterSpec): java.security.PublicKey;
				public doPACEStep3KeyAgreement(param0: string, param1: java.security.PrivateKey, param2: java.security.PublicKey): native.Array<number>;
				public doPACEStep1(param0: javax.crypto.SecretKey, param1: javax.crypto.Cipher): native.Array<number>;
				public doPACEStep2IM(param0: string, param1: java.security.spec.AlgorithmParameterSpec, param2: native.Array<number>): java.security.spec.AlgorithmParameterSpec;
				public static generateAuthenticationToken(param0: string, param1: javax.crypto.SecretKey, param2: java.security.PublicKey): native.Array<number>;
				public constructor(param0: org.jmrtd.PassportService, param1: org.jmrtd.protocol.SecureMessagingWrapper);
				public static computeKeySeedForPACE(param0: string): native.Array<number>;
			}
			export module PACEProtocol {
				export class MyECDHKeyAgreement {
					public static class: java.lang.Class<org.jmrtd.protocol.PACEProtocol.MyECDHKeyAgreement>;
					public constructor(param0: org.jmrtd.protocol.PACEProtocol);
					public doPhase(param0: java.security.interfaces.ECPublicKey): java.security.spec.ECPoint;
					public init(param0: java.security.interfaces.ECPrivateKey): void;
				}
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module protocol {
			export class PACEResult {
				public static class: java.lang.Class<org.jmrtd.protocol.PACEResult>;
				public getChipAuthenticationData(): native.Array<number>;
				public constructor(param0: org.jmrtd.lds.PACEInfo.MappingType, param1: string, param2: string, param3: string, param4: number, param5: java.security.spec.AlgorithmParameterSpec, param6: native.Array<number>, param7: java.security.spec.AlgorithmParameterSpec, param8: java.security.KeyPair, param9: java.security.PublicKey, param10: native.Array<number>, param11: native.Array<number>, param12: native.Array<number>, param13: org.jmrtd.protocol.SecureMessagingWrapper);
				public getSharedSecretBytes(): native.Array<number>;
				public getWrapper(): org.jmrtd.protocol.SecureMessagingWrapper;
				public toString(): string;
				public getEphemeralParams(): java.security.spec.AlgorithmParameterSpec;
				public getKeyLength(): number;
				public getStaticParams(): java.security.spec.AlgorithmParameterSpec;
				public getMappingType(): org.jmrtd.lds.PACEInfo.MappingType;
				public getDigestAlg(): string;
				public getCipherAlg(): string;
				public getPICCNonce(): native.Array<number>;
				public hashCode(): number;
				public getEncryptedChipAuthenticationData(): native.Array<number>;
				public equals(param0: any): boolean;
				public getPICCPublicKey(): java.security.PublicKey;
				public getAgreementAlg(): string;
				public setDigestAlg(param0: string): void;
				public getPCDKeyPair(): java.security.KeyPair;
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module protocol {
			export abstract class SecureMessagingWrapper {
				public static class: java.lang.Class<org.jmrtd.protocol.SecureMessagingWrapper>;
				public getSendSequenceCounter(): number;
				public getEncryptionKey(): javax.crypto.SecretKey;
				public getMACKey(): javax.crypto.SecretKey;
				public constructor();
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module protocol {
			export class TAProtocol {
				public static class: java.lang.Class<org.jmrtd.protocol.TAProtocol>;
				public doTA(param0: org.jmrtd.cert.CVCPrincipal, param1: java.util.List<org.jmrtd.cert.CardVerifiableCertificate>, param2: java.security.PrivateKey, param3: string, param4: org.jmrtd.protocol.CAResult, param5: string): org.jmrtd.protocol.TAResult;
				public constructor(param0: org.jmrtd.PassportService, param1: org.jmrtd.protocol.SecureMessagingWrapper);
			}
		}
	}
}

declare module org {
	export module jmrtd {
		export module protocol {
			export class TAResult {
				public static class: java.lang.Class<org.jmrtd.protocol.TAResult>;
				public getChipAuthenticationResult(): org.jmrtd.protocol.CAResult;
				public getCVCertificates(): java.util.List<org.jmrtd.cert.CardVerifiableCertificate>;
				public getCardChallenge(): native.Array<number>;
				public getTerminalKey(): java.security.PrivateKey;
				public getDocumentNumber(): string;
				public toString(): string;
				public constructor(param0: org.jmrtd.protocol.CAResult, param1: org.jmrtd.cert.CVCPrincipal, param2: java.util.List<org.jmrtd.cert.CardVerifiableCertificate>, param3: java.security.PrivateKey, param4: string, param5: native.Array<number>);
				public getCAReference(): org.jmrtd.cert.CVCPrincipal;
			}
		}
	}
}

//Generics information:
//org.jmrtd.cbeff.BiometricDataBlockDecoder:1
//org.jmrtd.cbeff.BiometricDataBlockEncoder:1
//org.jmrtd.cbeff.ISO781611Encoder:1
//org.jmrtd.cbeff.SimpleCBEFFInfo:1
//org.jmrtd.lds.AbstractListInfo:1
//org.jmrtd.lds.CBEFFDataGroup:1

