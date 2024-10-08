var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/errors.js
var require_errors = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WriteZero = exports.UnexpectedEof = exports.TimedOut = exports.PermissionDenied = exports.NotFound = exports.NotConnected = exports.InvalidData = exports.Interrupted = exports.Http = exports.ConnectionReset = exports.ConnectionRefused = exports.ConnectionAborted = exports.Busy = exports.BrokenPipe = exports.BadResource = exports.AlreadyExists = exports.AddrNotAvailable = exports.AddrInUse = void 0;
    var AddrInUse = class extends Error {
    };
    exports.AddrInUse = AddrInUse;
    var AddrNotAvailable = class extends Error {
    };
    exports.AddrNotAvailable = AddrNotAvailable;
    var AlreadyExists = class extends Error {
    };
    exports.AlreadyExists = AlreadyExists;
    var BadResource = class extends Error {
    };
    exports.BadResource = BadResource;
    var BrokenPipe = class extends Error {
    };
    exports.BrokenPipe = BrokenPipe;
    var Busy = class extends Error {
    };
    exports.Busy = Busy;
    var ConnectionAborted = class extends Error {
    };
    exports.ConnectionAborted = ConnectionAborted;
    var ConnectionRefused = class extends Error {
    };
    exports.ConnectionRefused = ConnectionRefused;
    var ConnectionReset = class extends Error {
    };
    exports.ConnectionReset = ConnectionReset;
    var Http = class extends Error {
    };
    exports.Http = Http;
    var Interrupted = class extends Error {
    };
    exports.Interrupted = Interrupted;
    var InvalidData = class extends Error {
    };
    exports.InvalidData = InvalidData;
    var NotConnected = class extends Error {
    };
    exports.NotConnected = NotConnected;
    var NotFound = class extends Error {
      constructor() {
        super(...arguments);
        this.code = "ENOENT";
      }
    };
    exports.NotFound = NotFound;
    var PermissionDenied = class extends Error {
    };
    exports.PermissionDenied = PermissionDenied;
    var TimedOut = class extends Error {
    };
    exports.TimedOut = TimedOut;
    var UnexpectedEof = class extends Error {
    };
    exports.UnexpectedEof = UnexpectedEof;
    var WriteZero = class extends Error {
    };
    exports.WriteZero = WriteZero;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/internal/errorMap.js
var require_errorMap = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/internal/errorMap.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var errors = __importStar(require_errors());
    var mapper = (Ctor) => (err) => Object.assign(new Ctor(err.message), {
      stack: err.stack
    });
    var map = {
      EEXIST: mapper(errors.AlreadyExists),
      ENOENT: mapper(errors.NotFound)
    };
    var isNodeErr = (e) => {
      return e instanceof Error && "code" in e;
    };
    function mapError(e) {
      var _a;
      if (!isNodeErr(e))
        return e;
      return ((_a = map[e.code]) === null || _a === void 0 ? void 0 : _a.call(map, e)) || e;
    }
    exports.default = mapError;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/stat.js
var require_stat = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/stat.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stat = exports.denoifyFileInfo = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    function denoifyFileInfo(s) {
      return {
        atime: s.atime,
        birthtime: s.birthtime,
        blksize: s.blksize,
        blocks: s.blocks,
        dev: s.dev,
        gid: s.gid,
        ino: s.ino,
        isDirectory: s.isDirectory(),
        isFile: s.isFile(),
        isSymlink: s.isSymbolicLink(),
        mode: s.mode,
        mtime: s.mtime,
        nlink: s.nlink,
        rdev: s.rdev,
        size: s.size,
        uid: s.uid
      };
    }
    exports.denoifyFileInfo = denoifyFileInfo;
    var stat = async (path3) => {
      try {
        return denoifyFileInfo(await (0, promises_1.stat)(path3));
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.stat = stat;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstat.js
var require_fstat = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstat.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fstat = void 0;
    var fs = __importStar(require("fs"));
    var util_1 = require("util");
    var stat_js_1 = require_stat();
    var nodeFstat = (0, util_1.promisify)(fs.fstat);
    var fstat = async function(fd) {
      return (0, stat_js_1.denoifyFileInfo)(await nodeFstat(fd));
    };
    exports.fstat = fstat;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstatSync.js
var require_fstatSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/fstatSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fstatSync = void 0;
    var fs_1 = require("fs");
    var stat_js_1 = require_stat();
    var fstatSync = function fstatSync2(fd) {
      return (0, stat_js_1.denoifyFileInfo)((0, fs_1.fstatSync)(fd));
    };
    exports.fstatSync = fstatSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncate.js
var require_ftruncate = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ftruncate = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var _ftruncate = (0, util_1.promisify)(fs_1.ftruncate);
    exports.ftruncate = _ftruncate;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncateSync.js
var require_ftruncateSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/ftruncateSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ftruncateSync = void 0;
    var fs_1 = require("fs");
    exports.ftruncateSync = fs_1.ftruncateSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/read.js
var require_read = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/read.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.read = void 0;
    var util_1 = require("util");
    var fs_1 = require("fs");
    var _read = (0, util_1.promisify)(fs_1.read);
    var read = async function read2(rid, buffer) {
      if (buffer == null) {
        throw new TypeError("Buffer must not be null.");
      }
      if (buffer.length === 0) {
        return 0;
      }
      const { bytesRead } = await _read(rid, buffer, 0, buffer.length, null);
      return bytesRead === 0 ? null : bytesRead;
    };
    exports.read = read;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readSync.js
var require_readSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readSync = void 0;
    var fs = __importStar(require("fs"));
    var readSync = (fd, buffer) => {
      const bytesRead = fs.readSync(fd, buffer);
      return bytesRead === 0 ? null : bytesRead;
    };
    exports.readSync = readSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/write.js
var require_write = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/write.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.write = void 0;
    var fs = __importStar(require("fs"));
    var util_1 = require("util");
    var nodeWrite = (0, util_1.promisify)(fs.write);
    var write = async (fd, data) => {
      const { bytesWritten } = await nodeWrite(fd, data);
      return bytesWritten;
    };
    exports.write = write;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeSync.js
var require_writeSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeSync = void 0;
    var fs = __importStar(require("fs"));
    exports.writeSync = fs.writeSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/classes/FsFile.js
var require_FsFile = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/classes/FsFile.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.File = exports.FsFile = void 0;
    var fs = __importStar(require("fs"));
    var fstat_js_1 = require_fstat();
    var fstatSync_js_1 = require_fstatSync();
    var ftruncate_js_1 = require_ftruncate();
    var ftruncateSync_js_1 = require_ftruncateSync();
    var read_js_1 = require_read();
    var readSync_js_1 = require_readSync();
    var write_js_1 = require_write();
    var writeSync_js_1 = require_writeSync();
    var FsFile = class {
      constructor(rid) {
        this.rid = rid;
      }
      async write(p) {
        return await (0, write_js_1.write)(this.rid, p);
      }
      writeSync(p) {
        return (0, writeSync_js_1.writeSync)(this.rid, p);
      }
      async truncate(len) {
        await (0, ftruncate_js_1.ftruncate)(this.rid, len);
      }
      truncateSync(len) {
        return (0, ftruncateSync_js_1.ftruncateSync)(this.rid, len);
      }
      read(p) {
        return (0, read_js_1.read)(this.rid, p);
      }
      readSync(p) {
        return (0, readSync_js_1.readSync)(this.rid, p);
      }
      seek(_offset, _whence) {
        throw new Error("Method not implemented.");
      }
      seekSync(_offset, _whence) {
        throw new Error("Method not implemented.");
      }
      async stat() {
        return await (0, fstat_js_1.fstat)(this.rid);
      }
      statSync() {
        return (0, fstatSync_js_1.fstatSync)(this.rid);
      }
      close() {
        fs.closeSync(this.rid);
      }
      get readable() {
        throw new Error("Not implemented.");
      }
      get writable() {
        throw new Error("Not implemented.");
      }
    };
    exports.FsFile = FsFile;
    var File = FsFile;
    exports.File = File;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/classes/PermissionStatus.js
var require_PermissionStatus = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/classes/PermissionStatus.js"(exports) {
    "use strict";
    var _a;
    var _b;
    var _c;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PermissionStatus = void 0;
    (_a = (_c = globalThis).EventTarget) !== null && _a !== void 0 ? _a : _c.EventTarget = (_b = require("events").EventTarget) !== null && _b !== void 0 ? _b : null;
    var PermissionStatus = class extends EventTarget {
      /** @internal */
      constructor(state) {
        super();
        this.state = state;
        this.onchange = null;
      }
    };
    exports.PermissionStatus = PermissionStatus;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/classes/Permissions.js
var require_Permissions = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/classes/Permissions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Permissions = void 0;
    var PermissionStatus_js_1 = require_PermissionStatus();
    var Permissions = class {
      query(desc) {
        return Promise.resolve(this.querySync(desc));
      }
      querySync(_desc) {
        return new PermissionStatus_js_1.PermissionStatus("granted");
      }
      revoke(desc) {
        return Promise.resolve(this.revokeSync(desc));
      }
      revokeSync(_desc) {
        return new PermissionStatus_js_1.PermissionStatus("denied");
      }
      request(desc) {
        return this.query(desc);
      }
      requestSync(desc) {
        return this.querySync(desc);
      }
    };
    exports.Permissions = Permissions;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/classes.js
var require_classes = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/classes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PermissionStatus = exports.Permissions = exports.FsFile = exports.File = void 0;
    var FsFile_js_1 = require_FsFile();
    Object.defineProperty(exports, "File", { enumerable: true, get: function() {
      return FsFile_js_1.File;
    } });
    Object.defineProperty(exports, "FsFile", { enumerable: true, get: function() {
      return FsFile_js_1.FsFile;
    } });
    var Permissions_js_1 = require_Permissions();
    Object.defineProperty(exports, "Permissions", { enumerable: true, get: function() {
      return Permissions_js_1.Permissions;
    } });
    var PermissionStatus_js_1 = require_PermissionStatus();
    Object.defineProperty(exports, "PermissionStatus", { enumerable: true, get: function() {
      return PermissionStatus_js_1.PermissionStatus;
    } });
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/enums/SeekMode.js
var require_SeekMode = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/enums/SeekMode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SeekMode = void 0;
    var SeekMode;
    (function(SeekMode2) {
      SeekMode2[SeekMode2["Start"] = 0] = "Start";
      SeekMode2[SeekMode2["Current"] = 1] = "Current";
      SeekMode2[SeekMode2["End"] = 2] = "End";
    })(SeekMode = exports.SeekMode || (exports.SeekMode = {}));
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/enums.js
var require_enums = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/enums.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SeekMode = void 0;
    var SeekMode_js_1 = require_SeekMode();
    Object.defineProperty(exports, "SeekMode", { enumerable: true, get: function() {
      return SeekMode_js_1.SeekMode;
    } });
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/addSignalListener.js
var require_addSignalListener = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/addSignalListener.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addSignalListener = void 0;
    var process_1 = __importDefault(require("process"));
    function denoSignalToNodeJs(signal) {
      if (signal === "SIGEMT") {
        throw new Error("SIGEMT is not supported");
      }
      return signal;
    }
    var addSignalListener = (signal, handler) => {
      process_1.default.addListener(denoSignalToNodeJs(signal), handler);
    };
    exports.addSignalListener = addSignalListener;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/build.js
var require_build = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/build.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.build = void 0;
    var os = __importStar(require("os"));
    exports.build = {
      arch: "x86_64",
      os: ((p) => p === "win32" ? "windows" : p === "darwin" ? "darwin" : "linux")(os.platform()),
      vendor: "pc",
      target: ((p) => p === "win32" ? "x86_64-pc-windows-msvc" : p === "darwin" ? "x86_64-apple-darwin" : "x86_64-unknown-linux-gnu")(os.platform())
    };
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/customInspect.js
var require_customInspect = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/customInspect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.customInspect = void 0;
    exports.customInspect = Symbol.for("nodejs.util.inspect.custom");
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/env.js
var require_env = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.env = void 0;
    exports.env = {
      get(key) {
        assertValidKey(key);
        return process.env[key];
      },
      set(key, value) {
        assertValidKey(key);
        assertValidValue(value);
        process.env[key] = value;
      },
      has(key) {
        assertValidKey(key);
        return key in process.env;
      },
      delete(key) {
        assertValidKey(key);
        delete process.env[key];
      },
      // @ts-expect-error https://github.com/denoland/deno/issues/10267
      toObject() {
        return { ...process.env };
      }
    };
    var invalidKeyChars = ["=", "\0"].map((c) => c.charCodeAt(0));
    var invalidValueChar = "\0".charCodeAt(0);
    function assertValidKey(key) {
      if (key.length === 0) {
        throw new TypeError("Key is an empty string.");
      }
      for (let i = 0; i < key.length; i++) {
        if (invalidKeyChars.includes(key.charCodeAt(i))) {
          const char = key.charCodeAt(i) === "\0".charCodeAt(0) ? "\\0" : key[i];
          throw new TypeError(`Key contains invalid characters: "${char}"`);
        }
      }
    }
    function assertValidValue(value) {
      for (let i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) === invalidValueChar) {
          throw new TypeError('Value contains invalid characters: "\\0"');
        }
      }
    }
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/mainModule.js
var require_mainModule = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/mainModule.js"(exports) {
    "use strict";
    var _a;
    var _b;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mainModule = void 0;
    var path_1 = require("path");
    var url_1 = require("url");
    exports.mainModule = (0, url_1.pathToFileURL)((_b = (_a = require.main) === null || _a === void 0 ? void 0 : _a.filename) !== null && _b !== void 0 ? _b : (0, path_1.join)(__dirname, "$deno$repl.ts")).href;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/metrics.js
var require_metrics = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/metrics.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.metrics = void 0;
    var metrics = function metrics2() {
      return {
        opsDispatched: 0,
        opsDispatchedSync: 0,
        opsDispatchedAsync: 0,
        opsDispatchedAsyncUnref: 0,
        opsCompleted: 0,
        opsCompletedSync: 0,
        opsCompletedAsync: 0,
        opsCompletedAsyncUnref: 0,
        bytesSentControl: 0,
        bytesSentData: 0,
        bytesReceived: 0,
        ops: {}
      };
    };
    exports.metrics = metrics;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/noColor.js
var require_noColor = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/noColor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.noColor = void 0;
    exports.noColor = process.env.NO_COLOR !== void 0;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/permissions.js
var require_permissions = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/permissions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.permissions = void 0;
    var Permissions_js_1 = require_Permissions();
    exports.permissions = new Permissions_js_1.Permissions();
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/pid.js
var require_pid = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/pid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pid = void 0;
    exports.pid = process.pid;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/ppid.js
var require_ppid = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/ppid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ppid = void 0;
    exports.ppid = process.ppid;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/resources.js
var require_resources = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/resources.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resources = void 0;
    var resources = function resources2() {
      console.warn([
        "Deno.resources() shim returns a dummy object that does not update.",
        "If you think this is a mistake, raise an issue at https://github.com/denoland/node_deno_shims/issues"
      ].join("\n"));
      return {};
    };
    exports.resources = resources;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/std.js
var require_std = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/std.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stderr = exports.stdout = exports.stdin = void 0;
    var readSync_js_1 = require_readSync();
    var writeSync_js_1 = require_writeSync();
    function chain(fn, cleanup) {
      let prev;
      return function _fn(...args) {
        const curr = (prev || Promise.resolve()).then(() => fn(...args)).finally(cleanup || (() => {
        })).then((result) => {
          if (prev === curr)
            prev = void 0;
          return result;
        });
        return prev = curr;
      };
    }
    exports.stdin = {
      rid: 0,
      read: chain((p) => {
        return new Promise((resolve4, reject) => {
          process.stdin.resume();
          process.stdin.on("error", onerror);
          process.stdin.once("readable", () => {
            var _a;
            process.stdin.off("error", onerror);
            const data = (_a = process.stdin.read(p.length)) !== null && _a !== void 0 ? _a : process.stdin.read();
            if (data) {
              p.set(data);
              resolve4(data.length > 0 ? data.length : null);
            } else {
              resolve4(null);
            }
          });
          function onerror(error) {
            reject(error);
            process.stdin.off("error", onerror);
          }
        });
      }, () => process.stdin.pause()),
      get readable() {
        throw new Error("Not implemented.");
      },
      readSync(buffer) {
        return (0, readSync_js_1.readSync)(this.rid, buffer);
      },
      close() {
        process.stdin.destroy();
      },
      setRaw(mode, options) {
        if (options === null || options === void 0 ? void 0 : options.cbreak) {
          throw new Error("The cbreak option is not implemented.");
        }
        process.stdin.setRawMode(mode);
      }
    };
    exports.stdout = {
      rid: 1,
      write: chain((p) => {
        return new Promise((resolve4) => {
          const result = process.stdout.write(p);
          if (!result) {
            process.stdout.once("drain", () => resolve4(p.length));
          } else {
            resolve4(p.length);
          }
        });
      }),
      get writable() {
        throw new Error("Not implemented.");
      },
      writeSync(data) {
        return (0, writeSync_js_1.writeSync)(this.rid, data);
      },
      close() {
        process.stdout.destroy();
      }
    };
    exports.stderr = {
      rid: 2,
      write: chain((p) => {
        return new Promise((resolve4) => {
          const result = process.stderr.write(p);
          if (!result) {
            process.stderr.once("drain", () => resolve4(p.length));
          } else {
            resolve4(p.length);
          }
        });
      }),
      get writable() {
        throw new Error("Not implemented.");
      },
      writeSync() {
        throw new Error("Not implemented");
      },
      close() {
        process.stderr.destroy();
      }
    };
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/internal/version.js
var require_version = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/internal/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.typescript = exports.deno = void 0;
    exports.deno = "1.33.3";
    exports.typescript = "5.0.4";
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/version.js
var require_version2 = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.version = void 0;
    var version_js_1 = require_version();
    exports.version = {
      deno: version_js_1.deno,
      typescript: version_js_1.typescript,
      v8: process.versions.v8
    };
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables.js
var require_variables = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.version = exports.resources = exports.ppid = exports.pid = exports.permissions = exports.noColor = exports.metrics = exports.mainModule = exports.errors = exports.env = exports.customInspect = exports.build = void 0;
    var build_js_1 = require_build();
    Object.defineProperty(exports, "build", { enumerable: true, get: function() {
      return build_js_1.build;
    } });
    var customInspect_js_1 = require_customInspect();
    Object.defineProperty(exports, "customInspect", { enumerable: true, get: function() {
      return customInspect_js_1.customInspect;
    } });
    var env_js_1 = require_env();
    Object.defineProperty(exports, "env", { enumerable: true, get: function() {
      return env_js_1.env;
    } });
    exports.errors = __importStar(require_errors());
    var mainModule_js_1 = require_mainModule();
    Object.defineProperty(exports, "mainModule", { enumerable: true, get: function() {
      return mainModule_js_1.mainModule;
    } });
    var metrics_js_1 = require_metrics();
    Object.defineProperty(exports, "metrics", { enumerable: true, get: function() {
      return metrics_js_1.metrics;
    } });
    var noColor_js_1 = require_noColor();
    Object.defineProperty(exports, "noColor", { enumerable: true, get: function() {
      return noColor_js_1.noColor;
    } });
    var permissions_js_1 = require_permissions();
    Object.defineProperty(exports, "permissions", { enumerable: true, get: function() {
      return permissions_js_1.permissions;
    } });
    var pid_js_1 = require_pid();
    Object.defineProperty(exports, "pid", { enumerable: true, get: function() {
      return pid_js_1.pid;
    } });
    var ppid_js_1 = require_ppid();
    Object.defineProperty(exports, "ppid", { enumerable: true, get: function() {
      return ppid_js_1.ppid;
    } });
    var resources_js_1 = require_resources();
    Object.defineProperty(exports, "resources", { enumerable: true, get: function() {
      return resources_js_1.resources;
    } });
    __exportStar(require_std(), exports);
    var version_js_1 = require_version2();
    Object.defineProperty(exports, "version", { enumerable: true, get: function() {
      return version_js_1.version;
    } });
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/chdir.js
var require_chdir = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/chdir.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chdir = void 0;
    var url_1 = require("url");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var chdir = function(path3) {
      try {
        return process.chdir(path3 instanceof URL ? (0, url_1.fileURLToPath)(path3) : path3);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new variables_js_1.errors.NotFound(`No such file or directory (os error 2), chdir '${path3}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.chdir = chdir;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmod.js
var require_chmod = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmod.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chmod = void 0;
    var fs = __importStar(require("fs/promises"));
    exports.chmod = fs.chmod;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmodSync.js
var require_chmodSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/chmodSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chmodSync = void 0;
    var fs = __importStar(require("fs"));
    exports.chmodSync = fs.chmodSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/chown.js
var require_chown = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/chown.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chown = void 0;
    var fs = __importStar(require("fs/promises"));
    var chown = async (path3, uid, gid) => await fs.chown(path3, uid !== null && uid !== void 0 ? uid : -1, gid !== null && gid !== void 0 ? gid : -1);
    exports.chown = chown;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/chownSync.js
var require_chownSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/chownSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chownSync = void 0;
    var fs = __importStar(require("fs"));
    var chownSync = (path3, uid, gid) => fs.chownSync(path3, uid !== null && uid !== void 0 ? uid : -1, gid !== null && gid !== void 0 ? gid : -1);
    exports.chownSync = chownSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/close.js
var require_close = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/close.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.close = void 0;
    var fs = __importStar(require("fs"));
    exports.close = fs.closeSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/internal/Conn.js
var require_Conn = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/internal/Conn.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Conn_socket;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TlsConn = exports.Conn = void 0;
    var net_1 = require("net");
    var FsFile_js_1 = require_FsFile();
    var Conn = class extends FsFile_js_1.FsFile {
      constructor(rid, localAddr, remoteAddr, socket) {
        super(rid);
        this.rid = rid;
        this.localAddr = localAddr;
        this.remoteAddr = remoteAddr;
        _Conn_socket.set(this, void 0);
        __classPrivateFieldSet(this, _Conn_socket, socket || new net_1.Socket({ fd: rid }), "f");
      }
      async closeWrite() {
        await new Promise((resolve4) => __classPrivateFieldGet(this, _Conn_socket, "f").end(resolve4));
      }
      setNoDelay(enable) {
        __classPrivateFieldGet(this, _Conn_socket, "f").setNoDelay(enable);
      }
      setKeepAlive(enable) {
        __classPrivateFieldGet(this, _Conn_socket, "f").setKeepAlive(enable);
      }
      ref() {
        __classPrivateFieldGet(this, _Conn_socket, "f").ref();
      }
      unref() {
        __classPrivateFieldGet(this, _Conn_socket, "f").unref();
      }
    };
    exports.Conn = Conn;
    _Conn_socket = /* @__PURE__ */ new WeakMap();
    var TlsConn = class extends Conn {
      handshake() {
        console.warn("@deno/shim-deno: Handshake is not supported.");
        return Promise.resolve({
          alpnProtocol: null
        });
      }
    };
    exports.TlsConn = TlsConn;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/connect.js
var require_connect = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/connect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.connect = void 0;
    var net_1 = require("net");
    var Conn_js_1 = require_Conn();
    var connect = function connect2(options) {
      if (options.transport === "unix") {
        throw new Error("Unstable UnixConnectOptions is not implemented");
      }
      const { transport = "tcp", hostname = "127.0.0.1", port } = options;
      if (transport !== "tcp") {
        throw new Error("Deno.connect is only implemented for transport: tcp");
      }
      const socket = (0, net_1.createConnection)({ port, host: hostname });
      socket.on("error", (err) => console.error(err));
      return new Promise((resolve4) => {
        socket.once("connect", () => {
          const rid = socket._handle.fd;
          const localAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.localAddress,
            port: socket.localPort,
            transport: "tcp"
          };
          const remoteAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.remoteAddress,
            port: socket.remotePort,
            transport: "tcp"
          };
          resolve4(new Conn_js_1.Conn(rid, localAddr, remoteAddr, socket));
        });
      });
    };
    exports.connect = connect;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFile.js
var require_readTextFile = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFile.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readTextFile = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readTextFile = async (path3, { signal } = {}) => {
      try {
        return await (0, promises_1.readFile)(path3, { encoding: "utf8", signal });
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.readTextFile = readTextFile;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/connectTls.js
var require_connectTls = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/connectTls.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.connectTls = void 0;
    var tls_1 = require("tls");
    var Conn_js_1 = require_Conn();
    var readTextFile_js_1 = require_readTextFile();
    var connectTls = async function connectTls2({ port, hostname = "127.0.0.1", certFile }) {
      const cert = certFile && await (0, readTextFile_js_1.readTextFile)(certFile);
      const socket = (0, tls_1.connect)({ port, host: hostname, cert });
      return new Promise((resolve4) => {
        socket.on("connect", () => {
          const rid = socket._handle.fd;
          const localAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.localAddress,
            port: socket.localPort,
            transport: "tcp"
          };
          const remoteAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.remoteAddress,
            port: socket.remotePort,
            transport: "tcp"
          };
          resolve4(new Conn_js_1.TlsConn(rid, localAddr, remoteAddr, socket));
        });
      });
    };
    exports.connectTls = connectTls;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/internal/consts.js
var require_consts = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/internal/consts.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_BUFFER_SIZE = void 0;
    exports.DEFAULT_BUFFER_SIZE = 32 * 1024;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/copy.js
var require_copy = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/copy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.copy = void 0;
    var consts_js_1 = require_consts();
    var copy = async function copy2(src, dst, options) {
      var _a;
      let n = 0;
      const bufSize = (_a = options === null || options === void 0 ? void 0 : options.bufSize) !== null && _a !== void 0 ? _a : consts_js_1.DEFAULT_BUFFER_SIZE;
      const b = new Uint8Array(bufSize);
      let gotEOF = false;
      while (gotEOF === false) {
        const result = await src.read(b);
        if (result === null) {
          gotEOF = true;
        } else {
          let nwritten = 0;
          while (nwritten < result) {
            nwritten += await dst.write(b.subarray(nwritten, result));
          }
          n += nwritten;
        }
      }
      return n;
    };
    exports.copy = copy;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFile.js
var require_copyFile = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFile.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.copyFile = void 0;
    var fs = __importStar(require("fs/promises"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var errors = __importStar(require_errors());
    var copyFile = async (src, dest) => {
      try {
        await fs.copyFile(src, dest);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new errors.NotFound(`File not found, copy '${src}' -> '${dest}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.copyFile = copyFile;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFileSync.js
var require_copyFileSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/copyFileSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.copyFileSync = void 0;
    var fs = __importStar(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var errors = __importStar(require_errors());
    var copyFileSync = (src, dest) => {
      try {
        fs.copyFileSync(src, dest);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new errors.NotFound(`File not found, copy '${src}' -> '${dest}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.copyFileSync = copyFileSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/internal/fs_flags.js
var require_fs_flags = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/internal/fs_flags.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFsFlag = exports.getCreationFlag = exports.getAccessFlag = void 0;
    var errors = __importStar(require_errors());
    var fs_1 = require("fs");
    var os_1 = __importDefault(require("os"));
    var { O_APPEND, O_CREAT, O_EXCL, O_RDONLY, O_RDWR, O_TRUNC, O_WRONLY } = fs_1.constants;
    function getAccessFlag(opts) {
      if (opts.read && !opts.write && !opts.append)
        return O_RDONLY;
      if (!opts.read && opts.write && !opts.append)
        return O_WRONLY;
      if (opts.read && opts.write && !opts.append)
        return O_RDWR;
      if (!opts.read && opts.append)
        return O_WRONLY | O_APPEND;
      if (opts.read && opts.append)
        return O_RDWR | O_APPEND;
      if (!opts.read && !opts.write && !opts.append) {
        throw new errors.BadResource("EINVAL: One of 'read', 'write', 'append' is required to open file.");
      }
      throw new errors.BadResource("EINVAL: Invalid fs flags.");
    }
    exports.getAccessFlag = getAccessFlag;
    function getCreationFlag(opts) {
      if (!opts.write && !opts.append) {
        if (opts.truncate || opts.create || opts.createNew) {
          throw new errors.BadResource("EINVAL: One of 'write', 'append' is required to 'truncate', 'create' or 'createNew' file.");
        }
      }
      if (opts.append) {
        if (opts.truncate && !opts.createNew) {
          throw new errors.BadResource("EINVAL: unexpected 'truncate': true and 'createNew': false when 'append' is true.");
        }
      }
      if (!opts.create && !opts.truncate && !opts.createNew)
        return 0;
      if (opts.create && !opts.truncate && !opts.createNew)
        return O_CREAT;
      if (!opts.create && opts.truncate && !opts.createNew) {
        if (os_1.default.platform() === "win32") {
          return O_CREAT | O_TRUNC;
        } else {
          return O_TRUNC;
        }
      }
      if (opts.create && opts.truncate && !opts.createNew) {
        return O_CREAT | O_TRUNC;
      }
      if (opts.createNew)
        return O_CREAT | O_EXCL;
      throw new errors.BadResource("EINVAL: Invalid fs flags.");
    }
    exports.getCreationFlag = getCreationFlag;
    function getFsFlag(flags) {
      return getAccessFlag(flags) | getCreationFlag(flags);
    }
    exports.getFsFlag = getFsFlag;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/open.js
var require_open = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/open.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.open = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var FsFile_js_1 = require_FsFile();
    var fs_flags_js_1 = require_fs_flags();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var nodeOpen = (0, util_1.promisify)(fs_1.open);
    var open = async function open2(path3, { read, write, append, truncate, create, createNew, mode = 438 } = {
      read: true
    }) {
      const flagMode = (0, fs_flags_js_1.getFsFlag)({
        read,
        write,
        append,
        truncate,
        create,
        createNew
      });
      try {
        const fd = await nodeOpen(path3, flagMode, mode);
        return new FsFile_js_1.File(fd);
      } catch (err) {
        throw (0, errorMap_js_1.default)(err);
      }
    };
    exports.open = open;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/create.js
var require_create = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/create.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.create = void 0;
    var open_js_1 = require_open();
    var create = async function create2(path3) {
      return await (0, open_js_1.open)(path3, { write: true, create: true, truncate: true });
    };
    exports.create = create;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/openSync.js
var require_openSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/openSync.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.openSync = void 0;
    var fs_1 = require("fs");
    var FsFile_js_1 = require_FsFile();
    var fs_flags_js_1 = require_fs_flags();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var openSync = function openSync2(path3, { read, write, append, truncate, create, createNew, mode = 438 } = {
      read: true
    }) {
      const flagMode = (0, fs_flags_js_1.getFsFlag)({
        read,
        write,
        append,
        truncate,
        create,
        createNew
      });
      try {
        const fd = (0, fs_1.openSync)(path3, flagMode, mode);
        return new FsFile_js_1.File(fd);
      } catch (err) {
        throw (0, errorMap_js_1.default)(err);
      }
    };
    exports.openSync = openSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/createSync.js
var require_createSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/createSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSync = void 0;
    var openSync_js_1 = require_openSync();
    var createSync = function createSync2(path3) {
      return (0, openSync_js_1.openSync)(path3, {
        create: true,
        truncate: true,
        read: true,
        write: true
      });
    };
    exports.createSync = createSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/cwd.js
var require_cwd = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/cwd.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cwd = void 0;
    exports.cwd = process.cwd;
  }
});

// npm/node_modules/isexe/windows.js
var require_windows = __commonJS({
  "npm/node_modules/isexe/windows.js"(exports, module2) {
    module2.exports = isexe;
    isexe.sync = sync;
    var fs = require("fs");
    function checkPathExt(path3, options) {
      var pathext = options.pathExt !== void 0 ? options.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(";");
      if (pathext.indexOf("") !== -1) {
        return true;
      }
      for (var i = 0; i < pathext.length; i++) {
        var p = pathext[i].toLowerCase();
        if (p && path3.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path3, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path3, options);
    }
    function isexe(path3, options, cb) {
      fs.stat(path3, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path3, options));
      });
    }
    function sync(path3, options) {
      return checkStat(fs.statSync(path3), path3, options);
    }
  }
});

// npm/node_modules/isexe/mode.js
var require_mode = __commonJS({
  "npm/node_modules/isexe/mode.js"(exports, module2) {
    module2.exports = isexe;
    isexe.sync = sync;
    var fs = require("fs");
    function isexe(path3, options, cb) {
      fs.stat(path3, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    function sync(path3, options) {
      return checkStat(fs.statSync(path3), options);
    }
    function checkStat(stat, options) {
      return stat.isFile() && checkMode(stat, options);
    }
    function checkMode(stat, options) {
      var mod = stat.mode;
      var uid = stat.uid;
      var gid = stat.gid;
      var myUid = options.uid !== void 0 ? options.uid : process.getuid && process.getuid();
      var myGid = options.gid !== void 0 ? options.gid : process.getgid && process.getgid();
      var u = parseInt("100", 8);
      var g = parseInt("010", 8);
      var o = parseInt("001", 8);
      var ug = u | g;
      var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
      return ret;
    }
  }
});

// npm/node_modules/isexe/index.js
var require_isexe = __commonJS({
  "npm/node_modules/isexe/index.js"(exports, module2) {
    var fs = require("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module2.exports = isexe;
    isexe.sync = sync;
    function isexe(path3, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve4, reject) {
          isexe(path3, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve4(is);
            }
          });
        });
      }
      core(path3, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path3, options) {
      try {
        return core.sync(path3, options || {});
      } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") {
          return false;
        } else {
          throw er;
        }
      }
    }
  }
});

// npm/node_modules/which/which.js
var require_which = __commonJS({
  "npm/node_modules/which/which.js"(exports, module2) {
    var isWindows2 = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path3 = require("path");
    var COLON = isWindows2 ? ";" : ":";
    var isexe = require_isexe();
    var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
    var getPathInfo = (cmd, opt) => {
      const colon = opt.colon || COLON;
      const pathEnv = cmd.match(/\//) || isWindows2 && cmd.match(/\\/) ? [""] : [
        // windows always checks the cwd first
        ...isWindows2 ? [process.cwd()] : [],
        ...(opt.path || process.env.PATH || /* istanbul ignore next: very unusual */
        "").split(colon)
      ];
      const pathExtExe = isWindows2 ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
      const pathExt = isWindows2 ? pathExtExe.split(colon) : [""];
      if (isWindows2) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
          pathExt.unshift("");
      }
      return {
        pathEnv,
        pathExt,
        pathExtExe
      };
    };
    var which = (cmd, opt, cb) => {
      if (typeof opt === "function") {
        cb = opt;
        opt = {};
      }
      if (!opt)
        opt = {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      const step = (i) => new Promise((resolve4, reject) => {
        if (i === pathEnv.length)
          return opt.all && found.length ? resolve4(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path3.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve4(subStep(p, i, 0));
      });
      const subStep = (p, i, ii) => new Promise((resolve4, reject) => {
        if (ii === pathExt.length)
          return resolve4(step(i + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve4(p + ext);
          }
          return resolve4(subStep(p, i, ii + 1));
        });
      });
      return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
    };
    var whichSync = (cmd, opt) => {
      opt = opt || {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (let i = 0; i < pathEnv.length; i++) {
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path3.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for (let j = 0; j < pathExt.length; j++) {
          const cur = p + pathExt[j];
          try {
            const is = isexe.sync(cur, { pathExt: pathExtExe });
            if (is) {
              if (opt.all)
                found.push(cur);
              else
                return cur;
            }
          } catch (ex) {
          }
        }
      }
      if (opt.all && found.length)
        return found;
      if (opt.nothrow)
        return null;
      throw getNotFoundError(cmd);
    };
    module2.exports = which;
    which.sync = whichSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/execPath.js
var require_execPath = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/execPath.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.execPath = void 0;
    var which_1 = __importDefault(require_which());
    var execPath = () => which_1.default.sync("deno");
    exports.execPath = execPath;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/exit.js
var require_exit = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/exit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exit = void 0;
    var exit = function exit2(code) {
      return process.exit(code);
    };
    exports.exit = exit;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasync.js
var require_fdatasync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fdatasync = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var _fdatasync = (0, util_1.promisify)(fs_1.fdatasync);
    exports.fdatasync = _fdatasync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasyncSync.js
var require_fdatasyncSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/fdatasyncSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fdatasyncSync = void 0;
    var fs_1 = require("fs");
    exports.fdatasyncSync = fs_1.fdatasyncSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsync.js
var require_fsync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fsync = void 0;
    var fs_1 = require("fs");
    var util_1 = require("util");
    var fsync = function fsync2(rid) {
      return (0, util_1.promisify)(fs_1.fsync)(rid);
    };
    exports.fsync = fsync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsyncSync.js
var require_fsyncSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/fsyncSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fsyncSync = void 0;
    var fs_1 = require("fs");
    var fsyncSync = function fsyncSync2(rid) {
      return (0, fs_1.fsyncSync)(rid);
    };
    exports.fsyncSync = fsyncSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/gid.js
var require_gid = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/gid.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.gid = void 0;
    var process_1 = __importDefault(require("process"));
    exports.gid = process_1.default.getgid;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/hostname.js
var require_hostname = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/hostname.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hostname = void 0;
    var os = __importStar(require("os"));
    var hostname = function hostname2() {
      return os.hostname();
    };
    exports.hostname = hostname;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/inspect.js
var require_inspect = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/inspect.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.inspect = void 0;
    var util = __importStar(require("util"));
    var inspect = (value, options = {}) => util.inspect(value, options);
    exports.inspect = inspect;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/kill.js
var require_kill = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/kill.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.kill = void 0;
    var os_1 = __importDefault(require("os"));
    var process_1 = __importDefault(require("process"));
    var kill = function(pid, signo) {
      if (pid < 0 && os_1.default.platform() === "win32") {
        throw new TypeError("Invalid pid");
      }
      process_1.default.kill(pid, signo);
    };
    exports.kill = kill;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/link.js
var require_link = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/link.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.link = void 0;
    var fs = __importStar(require("fs/promises"));
    exports.link = fs.link;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/linkSync.js
var require_linkSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/linkSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.linkSync = void 0;
    var fs = __importStar(require("fs"));
    exports.linkSync = fs.linkSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/internal/Listener.js
var require_Listener = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/internal/Listener.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _Listener_listener;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Listener = void 0;
    var close_js_1 = require_close();
    var errors = __importStar(require_errors());
    var Listener = class {
      constructor(rid, addr, listener) {
        this.rid = rid;
        this.addr = addr;
        _Listener_listener.set(this, void 0);
        __classPrivateFieldSet(this, _Listener_listener, listener, "f");
      }
      async accept() {
        if (!__classPrivateFieldGet(this, _Listener_listener, "f")) {
          throw new errors.BadResource("Listener not initialised");
        }
        const result = await __classPrivateFieldGet(this, _Listener_listener, "f").next();
        if (result.done) {
          throw new errors.BadResource("Server not listening");
        }
        return result.value;
      }
      async next() {
        let conn;
        try {
          conn = await this.accept();
        } catch (error) {
          if (error instanceof errors.BadResource) {
            return { value: void 0, done: true };
          }
          throw error;
        }
        return { value: conn, done: false };
      }
      return(value) {
        this.close();
        return Promise.resolve({ value, done: true });
      }
      close() {
        (0, close_js_1.close)(this.rid);
      }
      ref() {
        throw new Error("Not implemented");
      }
      unref() {
        throw new Error("Not implemented");
      }
      [(_Listener_listener = /* @__PURE__ */ new WeakMap(), Symbol.asyncIterator)]() {
        return this;
      }
    };
    exports.Listener = Listener;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/listen.js
var require_listen = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/listen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.listen = void 0;
    var net_1 = require("net");
    var Conn_js_1 = require_Conn();
    var Listener_js_1 = require_Listener();
    async function* _listen(server, waitFor) {
      await waitFor;
      while (server.listening) {
        yield new Promise((resolve4) => server.once("connection", (socket) => {
          socket.on("error", (err) => console.error(err));
          const rid = socket._handle.fd;
          const localAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.localAddress,
            port: socket.localPort,
            transport: "tcp"
          };
          const remoteAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.remoteAddress,
            port: socket.remotePort,
            transport: "tcp"
          };
          resolve4(new Conn_js_1.Conn(rid, localAddr, remoteAddr));
        }));
      }
    }
    var listen = function listen2(options) {
      if (options.transport === "unix") {
        throw new Error("Unstable UnixListenOptions is not implemented");
      }
      const { port, hostname = "0.0.0.0", transport = "tcp" } = options;
      if (transport !== "tcp") {
        throw new Error("Deno.listen is only implemented for transport: tcp");
      }
      const server = (0, net_1.createServer)();
      const waitFor = new Promise((resolve4) => (
        // server._handle.fd is assigned immediately on .listen()
        server.listen(port, hostname, resolve4)
      ));
      const listener = new Listener_js_1.Listener(server._handle.fd, {
        hostname,
        port,
        transport: "tcp"
      }, _listen(server, waitFor));
      return listener;
    };
    exports.listen = listen;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFileSync.js
var require_readTextFileSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readTextFileSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readTextFileSync = void 0;
    var fs = __importStar(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readTextFileSync = function(path3) {
      try {
        return fs.readFileSync(path3, "utf8");
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.readTextFileSync = readTextFileSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/listenTls.js
var require_listenTls = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/listenTls.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.listenTls = void 0;
    var tls_1 = require("tls");
    var Conn_js_1 = require_Conn();
    var Listener_js_1 = require_Listener();
    var readTextFileSync_js_1 = require_readTextFileSync();
    async function* _listen(server, waitFor) {
      await waitFor;
      while (server.listening) {
        yield new Promise((resolve4) => server.once("secureConnection", (socket) => {
          socket.on("error", (err) => console.error(err));
          const rid = socket._handle.fd;
          const localAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.localAddress,
            port: socket.localPort,
            transport: "tcp"
          };
          const remoteAddr = {
            // cannot be undefined while socket is connected
            hostname: socket.remoteAddress,
            port: socket.remotePort,
            transport: "tcp"
          };
          resolve4(new Conn_js_1.TlsConn(rid, localAddr, remoteAddr));
        }));
      }
    }
    var listenTls = function listen({ port, hostname = "0.0.0.0", transport = "tcp", certFile, keyFile }) {
      if (transport !== "tcp") {
        throw new Error("Deno.listen is only implemented for transport: tcp");
      }
      const [cert, key] = [certFile, keyFile].map((f) => f == null ? void 0 : (0, readTextFileSync_js_1.readTextFileSync)(f));
      const server = (0, tls_1.createServer)({ cert, key });
      const waitFor = new Promise((resolve4) => (
        // server._handle.fd is assigned immediately on .listen()
        server.listen(port, hostname, resolve4)
      ));
      const listener = new Listener_js_1.Listener(server._handle.fd, {
        hostname,
        port,
        transport: "tcp"
      }, _listen(server, waitFor));
      return listener;
    };
    exports.listenTls = listenTls;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/loadavg.js
var require_loadavg = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/loadavg.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadavg = void 0;
    var os = __importStar(require("os"));
    var loadavg = function loadavg2() {
      return os.loadavg();
    };
    exports.loadavg = loadavg;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstat.js
var require_lstat = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstat.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lstat = void 0;
    var fs = __importStar(require("fs/promises"));
    var stat_js_1 = require_stat();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var lstat = async (path3) => {
      try {
        return (0, stat_js_1.denoifyFileInfo)(await fs.lstat(path3));
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.lstat = lstat;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstatSync.js
var require_lstatSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/lstatSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lstatSync = void 0;
    var fs = __importStar(require("fs"));
    var stat_js_1 = require_stat();
    var lstatSync = (path3) => (0, stat_js_1.denoifyFileInfo)(fs.lstatSync(path3));
    exports.lstatSync = lstatSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDir.js
var require_makeTempDir = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDir.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeTempDir = void 0;
    var promises_1 = require("fs/promises");
    var path_1 = require("path");
    var os_1 = require("os");
    var makeTempDir = function makeTempDir2({ prefix = "" } = {}) {
      return (0, promises_1.mkdtemp)((0, path_1.join)((0, os_1.tmpdir)(), prefix || "/"));
    };
    exports.makeTempDir = makeTempDir;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDirSync.js
var require_makeTempDirSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempDirSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeTempDirSync = void 0;
    var fs_1 = require("fs");
    var path_1 = require("path");
    var os_1 = require("os");
    var makeTempDirSync = function makeTempDirSync2({ prefix = "" } = {}) {
      return (0, fs_1.mkdtempSync)((0, path_1.join)((0, os_1.tmpdir)(), prefix || "/"));
    };
    exports.makeTempDirSync = makeTempDirSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/internal/random_id.js
var require_random_id = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/internal/random_id.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.randomId = void 0;
    var randomId = () => {
      const n = (Math.random() * 1048575 * 1e6).toString(16);
      return "" + n.slice(0, 6);
    };
    exports.randomId = randomId;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFile.js
var require_writeTextFile = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFile.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeTextFile = void 0;
    var fs = __importStar(require("fs/promises"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var fs_flags_js_1 = require_fs_flags();
    var writeTextFile = async function writeTextFile2(path3, data, { append = false, create = true, createNew = false, mode, signal } = {}) {
      const truncate = create && !append;
      const flag = (0, fs_flags_js_1.getFsFlag)({
        append,
        create,
        createNew,
        truncate,
        write: true
      });
      try {
        await fs.writeFile(path3, data, { flag, mode, signal });
        if (mode !== void 0)
          await fs.chmod(path3, mode);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.writeTextFile = writeTextFile;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFile.js
var require_makeTempFile = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeTempFile = void 0;
    var os_1 = require("os");
    var path_1 = require("path");
    var random_id_js_1 = require_random_id();
    var writeTextFile_js_1 = require_writeTextFile();
    var makeTempFile = async function makeTempFile2({ prefix = "" } = {}) {
      const name = (0, path_1.join)((0, os_1.tmpdir)(), prefix, (0, random_id_js_1.randomId)());
      await (0, writeTextFile_js_1.writeTextFile)(name, "");
      return name;
    };
    exports.makeTempFile = makeTempFile;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFileSync.js
var require_writeTextFileSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeTextFileSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeTextFileSync = void 0;
    var fs = __importStar(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var writeTextFileSync = (path3, data, { append = false, create = true, mode } = {}) => {
      const flag = create ? append ? "a" : "w" : "r+";
      try {
        fs.writeFileSync(path3, data, { flag, mode });
        if (mode !== void 0)
          fs.chmodSync(path3, mode);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.writeTextFileSync = writeTextFileSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFileSync.js
var require_makeTempFileSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/makeTempFileSync.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeTempFileSync = void 0;
    var os_1 = require("os");
    var path_1 = require("path");
    var random_id_js_1 = require_random_id();
    var writeTextFileSync_js_1 = require_writeTextFileSync();
    var makeTempFileSync = function makeTempFileSync2({ prefix = "" } = {}) {
      const name = (0, path_1.join)((0, os_1.tmpdir)(), prefix, (0, random_id_js_1.randomId)());
      (0, writeTextFileSync_js_1.writeTextFileSync)(name, "");
      return name;
    };
    exports.makeTempFileSync = makeTempFileSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/memoryUsage.js
var require_memoryUsage = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/memoryUsage.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.memoryUsage = void 0;
    exports.memoryUsage = process.memoryUsage;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdir.js
var require_mkdir = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdir.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mkdir = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var mkdir = async function mkdir2(path3, options) {
      try {
        await (0, promises_1.mkdir)(path3, options);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "EEXIST") {
          throw new variables_js_1.errors.AlreadyExists(`File exists (os error 17), mkdir '${path3}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.mkdir = mkdir;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdirSync.js
var require_mkdirSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/mkdirSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mkdirSync = void 0;
    var fs = __importStar(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var mkdirSync = (path3, options) => {
      try {
        fs.mkdirSync(path3, options);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "EEXIST") {
          throw new variables_js_1.errors.AlreadyExists(`File exists (os error 17), mkdir '${path3}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.mkdirSync = mkdirSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/osRelease.js
var require_osRelease = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/osRelease.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.osRelease = void 0;
    var os_1 = require("os");
    var osRelease = function osRelease2() {
      return (0, os_1.release)();
    };
    exports.osRelease = osRelease;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/osUptime.js
var require_osUptime = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/osUptime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.osUptime = void 0;
    var os_1 = require("os");
    var osUptime = function osUptime2() {
      return (0, os_1.uptime)();
    };
    exports.osUptime = osUptime;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDir.js
var require_readDir = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDir.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readDir = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readDir = async function* readDir2(path3) {
      try {
        for await (const e of await (0, promises_1.opendir)(String(path3))) {
          const ent = {
            name: e.name,
            isFile: e.isFile(),
            isDirectory: e.isDirectory(),
            isSymlink: e.isSymbolicLink()
          };
          yield ent;
        }
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.readDir = readDir;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDirSync.js
var require_readDirSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readDirSync.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readDirSync = void 0;
    var fs_1 = require("fs");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readDirSync = function* readDir(path3) {
      try {
        for (const e of (0, fs_1.readdirSync)(String(path3), { withFileTypes: true })) {
          const ent = {
            name: e.name,
            isFile: e.isFile(),
            isDirectory: e.isDirectory(),
            isSymlink: e.isSymbolicLink()
          };
          yield ent;
        }
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.readDirSync = readDirSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFile.js
var require_readFile = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFile.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readFile = void 0;
    var promises_1 = require("fs/promises");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readFile = async function readFile2(path3, { signal } = {}) {
      try {
        const buf = await (0, promises_1.readFile)(path3, { signal });
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.readFile = readFile;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFileSync.js
var require_readFileSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readFileSync.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readFileSync = void 0;
    var fs_1 = require("fs");
    var errorMap_js_1 = __importDefault(require_errorMap());
    var readFileSync = function readFileSync2(path3) {
      try {
        const buf = (0, fs_1.readFileSync)(path3);
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.length);
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.readFileSync = readFileSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLink.js
var require_readLink = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLink.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readLink = void 0;
    var fs = __importStar(require("fs/promises"));
    exports.readLink = fs.readlink;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLinkSync.js
var require_readLinkSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/readLinkSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readLinkSync = void 0;
    var fs = __importStar(require("fs"));
    exports.readLinkSync = fs.readlinkSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPath.js
var require_realPath = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPath.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.realPath = void 0;
    var fs = __importStar(require("fs/promises"));
    exports.realPath = fs.realpath;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPathSync.js
var require_realPathSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/realPathSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.realPathSync = void 0;
    var fs = __importStar(require("fs"));
    exports.realPathSync = fs.realpathSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/remove.js
var require_remove = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/remove.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.remove = void 0;
    var promises_1 = require("fs/promises");
    var remove = async function remove2(path3, options = {}) {
      const innerOptions = options.recursive ? { recursive: true, force: true } : {};
      try {
        return await (0, promises_1.rm)(path3, innerOptions);
      } catch (err) {
        if (err.code === "ERR_FS_EISDIR") {
          return await (0, promises_1.rmdir)(path3, innerOptions);
        } else {
          throw err;
        }
      }
    };
    exports.remove = remove;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/removeSignalListener.js
var require_removeSignalListener = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/removeSignalListener.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeSignalListener = void 0;
    var process_1 = __importDefault(require("process"));
    var removeSignalListener = (signal, handler) => {
      process_1.default.removeListener(signal, handler);
    };
    exports.removeSignalListener = removeSignalListener;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/removeSync.js
var require_removeSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/removeSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removeSync = void 0;
    var fs = __importStar(require("fs"));
    var removeSync = (path3, options = {}) => {
      const innerOptions = options.recursive ? { recursive: true, force: true } : {};
      try {
        fs.rmSync(path3, innerOptions);
      } catch (err) {
        if (err.code === "ERR_FS_EISDIR") {
          fs.rmdirSync(path3, innerOptions);
        } else {
          throw err;
        }
      }
    };
    exports.removeSync = removeSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/rename.js
var require_rename = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/rename.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rename = void 0;
    var promises_1 = require("fs/promises");
    var rename = function rename2(oldpath, newpath) {
      return (0, promises_1.rename)(oldpath, newpath);
    };
    exports.rename = rename;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/renameSync.js
var require_renameSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/renameSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renameSync = void 0;
    var fs = __importStar(require("fs"));
    exports.renameSync = fs.renameSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/resolveDns.js
var require_resolveDns = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/resolveDns.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveDns = void 0;
    var dns_1 = __importDefault(require("dns"));
    var resolveDns = function resolveDns2(query, recordType, options) {
      if (options) {
        throw Error(`resolveDns option not implemnted yet`);
      }
      switch (recordType) {
        case "A":
        case "AAAA":
        case "CNAME":
        case "NS":
        case "PTR":
          return new Promise((resolve4, reject) => {
            dns_1.default.resolve(query, recordType, (err, addresses) => {
              if (err) {
                reject(err);
              } else {
                resolve4(addresses);
              }
            });
          });
        case "ANAME":
        case "CAA":
        case "MX":
        case "NAPTR":
        case "SOA":
        case "SRV":
        case "TXT":
        default:
          throw Error(`resolveDns type ${recordType} not implemnted yet`);
      }
    };
    exports.resolveDns = resolveDns;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/internal/streams.js
var require_streams = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/internal/streams.js"(exports) {
    "use strict";
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var _BufferStreamReader_instances;
    var _BufferStreamReader_stream;
    var _BufferStreamReader_error;
    var _BufferStreamReader_ended;
    var _BufferStreamReader_pendingActions;
    var _BufferStreamReader_runPendingActions;
    var _StreamWriter_stream;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StreamWriter = exports.BufferStreamReader = void 0;
    var BufferStreamReader = class {
      constructor(stream) {
        _BufferStreamReader_instances.add(this);
        _BufferStreamReader_stream.set(this, void 0);
        _BufferStreamReader_error.set(this, void 0);
        _BufferStreamReader_ended.set(this, false);
        _BufferStreamReader_pendingActions.set(this, []);
        __classPrivateFieldSet(this, _BufferStreamReader_stream, stream, "f");
        __classPrivateFieldGet(this, _BufferStreamReader_stream, "f").pause();
        __classPrivateFieldGet(this, _BufferStreamReader_stream, "f").on("error", (error) => {
          __classPrivateFieldSet(this, _BufferStreamReader_error, error, "f");
          __classPrivateFieldGet(this, _BufferStreamReader_instances, "m", _BufferStreamReader_runPendingActions).call(this);
        });
        __classPrivateFieldGet(this, _BufferStreamReader_stream, "f").on("readable", () => {
          __classPrivateFieldGet(this, _BufferStreamReader_instances, "m", _BufferStreamReader_runPendingActions).call(this);
        });
        __classPrivateFieldGet(this, _BufferStreamReader_stream, "f").on("end", () => {
          __classPrivateFieldSet(this, _BufferStreamReader_ended, true, "f");
          __classPrivateFieldGet(this, _BufferStreamReader_instances, "m", _BufferStreamReader_runPendingActions).call(this);
        });
      }
      readAll() {
        return new Promise((resolve4, reject) => {
          const chunks = [];
          const action = () => {
            if (__classPrivateFieldGet(this, _BufferStreamReader_error, "f")) {
              reject(__classPrivateFieldGet(this, _BufferStreamReader_error, "f"));
              return;
            }
            const buffer = __classPrivateFieldGet(this, _BufferStreamReader_stream, "f").read();
            if (buffer != null) {
              chunks.push(buffer);
              __classPrivateFieldGet(this, _BufferStreamReader_pendingActions, "f").push(action);
            } else if (__classPrivateFieldGet(this, _BufferStreamReader_ended, "f")) {
              const result = Buffer.concat(chunks);
              resolve4(result);
            } else {
              __classPrivateFieldGet(this, _BufferStreamReader_pendingActions, "f").push(action);
            }
          };
          action();
        });
      }
      read(p) {
        return new Promise((resolve4, reject) => {
          const action = () => {
            if (__classPrivateFieldGet(this, _BufferStreamReader_error, "f")) {
              reject(__classPrivateFieldGet(this, _BufferStreamReader_error, "f"));
              return;
            }
            const readBuffer = __classPrivateFieldGet(this, _BufferStreamReader_stream, "f").read(p.byteLength);
            if (readBuffer && readBuffer.byteLength > 0) {
              readBuffer.copy(p, 0, 0, readBuffer.byteLength);
              resolve4(readBuffer.byteLength);
              return;
            }
            if (__classPrivateFieldGet(this, _BufferStreamReader_ended, "f")) {
              resolve4(null);
            } else {
              __classPrivateFieldGet(this, _BufferStreamReader_pendingActions, "f").push(action);
            }
          };
          action();
        });
      }
    };
    exports.BufferStreamReader = BufferStreamReader;
    _BufferStreamReader_stream = /* @__PURE__ */ new WeakMap(), _BufferStreamReader_error = /* @__PURE__ */ new WeakMap(), _BufferStreamReader_ended = /* @__PURE__ */ new WeakMap(), _BufferStreamReader_pendingActions = /* @__PURE__ */ new WeakMap(), _BufferStreamReader_instances = /* @__PURE__ */ new WeakSet(), _BufferStreamReader_runPendingActions = function _BufferStreamReader_runPendingActions2() {
      const errors = [];
      for (const action of __classPrivateFieldGet(this, _BufferStreamReader_pendingActions, "f").splice(0)) {
        try {
          action();
        } catch (err) {
          errors.push(err);
        }
      }
      if (errors.length > 0) {
        throw errors.length > 1 ? new AggregateError(errors) : errors[0];
      }
    };
    var StreamWriter = class {
      constructor(stream) {
        _StreamWriter_stream.set(this, void 0);
        __classPrivateFieldSet(this, _StreamWriter_stream, stream, "f");
      }
      write(p) {
        return new Promise((resolve4, reject) => {
          __classPrivateFieldGet(this, _StreamWriter_stream, "f").write(p, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve4(p.byteLength);
            }
          });
        });
      }
    };
    exports.StreamWriter = StreamWriter;
    _StreamWriter_stream = /* @__PURE__ */ new WeakMap();
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/run.js
var require_run = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/run.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    var _Process_process;
    var _Process_stderr;
    var _Process_stdout;
    var _Process_stdin;
    var _Process_status;
    var _Process_receivedStatus;
    var _ProcessReadStream_stream;
    var _ProcessReadStream_bufferStreamReader;
    var _ProcessReadStream_closed;
    var _ProcessWriteStream_stream;
    var _ProcessWriteStream_streamWriter;
    var _ProcessWriteStream_closed;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Process = exports.run = void 0;
    var child_process_1 = __importDefault(require("child_process"));
    var fs_1 = __importDefault(require("fs"));
    var os_1 = __importDefault(require("os"));
    var url_1 = __importDefault(require("url"));
    var events_1 = require("events");
    var which_1 = __importDefault(require_which());
    var streams_js_1 = require_streams();
    var errors = __importStar(require_errors());
    var run = function run2(options) {
      const [cmd, ...args] = options.cmd;
      if (options.cwd && !fs_1.default.existsSync(options.cwd)) {
        throw new Error("The directory name is invalid.");
      }
      const commandName = getCmd(cmd);
      if (!which_1.default.sync(commandName, { nothrow: true })) {
        throw new errors.NotFound("The system cannot find the file specified.");
      }
      const process2 = child_process_1.default.spawn(commandName, args, {
        cwd: options.cwd,
        env: getEnv(options),
        uid: options.uid,
        gid: options.gid,
        shell: false,
        stdio: [
          getStdio(options.stdin, "in"),
          getStdio(options.stdout, "out"),
          getStdio(options.stderr, "out")
        ]
      });
      return new Process(process2);
    };
    exports.run = run;
    function getStdio(value, kind) {
      if (value === "inherit" || value == null) {
        return "inherit";
      } else if (value === "piped") {
        return "pipe";
      } else if (value === "null") {
        return "ignore";
      } else if (typeof value === "number") {
        switch (kind) {
          case "in":
            return fs_1.default.createReadStream(null, { fd: value });
          case "out":
            return fs_1.default.createWriteStream(null, { fd: value });
          default: {
            const _assertNever = kind;
            throw new Error("Unreachable.");
          }
        }
      } else {
        const _assertNever = value;
        throw new Error("Unknown value.");
      }
    }
    function getCmd(firstArg) {
      if (firstArg instanceof URL) {
        return url_1.default.fileURLToPath(firstArg);
      } else {
        return firstArg;
      }
    }
    function getEnv(options) {
      var _a;
      const env = (_a = options.env) !== null && _a !== void 0 ? _a : {};
      for (const name in process.env) {
        if (!Object.prototype.hasOwnProperty.call(env, name)) {
          if (options.clearEnv) {
            if (os_1.default.platform() === "win32") {
              env[name] = "";
            } else {
              delete env[name];
            }
          } else {
            env[name] = process.env[name];
          }
        }
      }
      return env;
    }
    var Process = class {
      /** @internal */
      constructor(process2) {
        var _a, _b, _c;
        _Process_process.set(this, void 0);
        _Process_stderr.set(this, void 0);
        _Process_stdout.set(this, void 0);
        _Process_stdin.set(this, void 0);
        _Process_status.set(this, void 0);
        _Process_receivedStatus.set(this, false);
        __classPrivateFieldSet(this, _Process_process, process2, "f");
        __classPrivateFieldSet(this, _Process_stdout, (_a = ProcessReadStream.fromNullable(__classPrivateFieldGet(this, _Process_process, "f").stdout)) !== null && _a !== void 0 ? _a : null, "f");
        __classPrivateFieldSet(this, _Process_stderr, (_b = ProcessReadStream.fromNullable(__classPrivateFieldGet(this, _Process_process, "f").stderr)) !== null && _b !== void 0 ? _b : null, "f");
        __classPrivateFieldSet(this, _Process_stdin, (_c = ProcessWriteStream.fromNullable(__classPrivateFieldGet(this, _Process_process, "f").stdin)) !== null && _c !== void 0 ? _c : null, "f");
        __classPrivateFieldSet(this, _Process_status, (0, events_1.once)(process2, "exit"), "f");
      }
      get rid() {
        return NaN;
      }
      get pid() {
        return __classPrivateFieldGet(this, _Process_process, "f").pid;
      }
      get stdin() {
        return __classPrivateFieldGet(this, _Process_stdin, "f");
      }
      get stdout() {
        return __classPrivateFieldGet(this, _Process_stdout, "f");
      }
      get stderr() {
        return __classPrivateFieldGet(this, _Process_stderr, "f");
      }
      async status() {
        const [receivedCode, signalName] = await __classPrivateFieldGet(this, _Process_status, "f");
        const signal = signalName ? os_1.default.constants.signals[signalName] : receivedCode > 128 ? receivedCode - 128 : void 0;
        const code = receivedCode != null ? receivedCode : signal != null ? 128 + signal : void 0;
        const success = code === 0;
        __classPrivateFieldSet(this, _Process_receivedStatus, true, "f");
        return { code, signal, success };
      }
      async output() {
        if (!__classPrivateFieldGet(this, _Process_stdout, "f")) {
          throw new TypeError("stdout was not piped");
        }
        const result = await __classPrivateFieldGet(this, _Process_stdout, "f").readAll();
        __classPrivateFieldGet(this, _Process_stdout, "f").close();
        return result;
      }
      async stderrOutput() {
        if (!__classPrivateFieldGet(this, _Process_stderr, "f")) {
          throw new TypeError("stderr was not piped");
        }
        const result = await __classPrivateFieldGet(this, _Process_stderr, "f").readAll();
        __classPrivateFieldGet(this, _Process_stderr, "f").close();
        return result;
      }
      close() {
        __classPrivateFieldGet(this, _Process_process, "f").unref();
        __classPrivateFieldGet(this, _Process_process, "f").kill();
      }
      kill(signo = "SIGTERM") {
        if (__classPrivateFieldGet(this, _Process_receivedStatus, "f")) {
          throw new errors.NotFound("entity not found");
        }
        __classPrivateFieldGet(this, _Process_process, "f").kill(signo);
      }
    };
    exports.Process = Process;
    _Process_process = /* @__PURE__ */ new WeakMap(), _Process_stderr = /* @__PURE__ */ new WeakMap(), _Process_stdout = /* @__PURE__ */ new WeakMap(), _Process_stdin = /* @__PURE__ */ new WeakMap(), _Process_status = /* @__PURE__ */ new WeakMap(), _Process_receivedStatus = /* @__PURE__ */ new WeakMap();
    var ProcessReadStream = class _ProcessReadStream {
      constructor(stream) {
        _ProcessReadStream_stream.set(this, void 0);
        _ProcessReadStream_bufferStreamReader.set(this, void 0);
        _ProcessReadStream_closed.set(this, false);
        __classPrivateFieldSet(this, _ProcessReadStream_stream, stream, "f");
        __classPrivateFieldSet(this, _ProcessReadStream_bufferStreamReader, new streams_js_1.BufferStreamReader(stream), "f");
      }
      static fromNullable(stream) {
        return stream ? new _ProcessReadStream(stream) : void 0;
      }
      readAll() {
        if (__classPrivateFieldGet(this, _ProcessReadStream_closed, "f")) {
          return Promise.resolve(new Uint8Array(0));
        } else {
          return __classPrivateFieldGet(this, _ProcessReadStream_bufferStreamReader, "f").readAll();
        }
      }
      read(p) {
        if (__classPrivateFieldGet(this, _ProcessReadStream_closed, "f")) {
          return Promise.resolve(null);
        } else {
          return __classPrivateFieldGet(this, _ProcessReadStream_bufferStreamReader, "f").read(p);
        }
      }
      close() {
        __classPrivateFieldSet(this, _ProcessReadStream_closed, true, "f");
        __classPrivateFieldGet(this, _ProcessReadStream_stream, "f").destroy();
      }
      get readable() {
        throw new Error("Not implemented.");
      }
      get writable() {
        throw new Error("Not implemented.");
      }
    };
    _ProcessReadStream_stream = /* @__PURE__ */ new WeakMap(), _ProcessReadStream_bufferStreamReader = /* @__PURE__ */ new WeakMap(), _ProcessReadStream_closed = /* @__PURE__ */ new WeakMap();
    var ProcessWriteStream = class _ProcessWriteStream {
      constructor(stream) {
        _ProcessWriteStream_stream.set(this, void 0);
        _ProcessWriteStream_streamWriter.set(this, void 0);
        _ProcessWriteStream_closed.set(this, false);
        __classPrivateFieldSet(this, _ProcessWriteStream_stream, stream, "f");
        __classPrivateFieldSet(this, _ProcessWriteStream_streamWriter, new streams_js_1.StreamWriter(stream), "f");
      }
      static fromNullable(stream) {
        return stream ? new _ProcessWriteStream(stream) : void 0;
      }
      write(p) {
        if (__classPrivateFieldGet(this, _ProcessWriteStream_closed, "f")) {
          return Promise.resolve(0);
        } else {
          return __classPrivateFieldGet(this, _ProcessWriteStream_streamWriter, "f").write(p);
        }
      }
      close() {
        __classPrivateFieldSet(this, _ProcessWriteStream_closed, true, "f");
        __classPrivateFieldGet(this, _ProcessWriteStream_stream, "f").end();
      }
    };
    _ProcessWriteStream_stream = /* @__PURE__ */ new WeakMap(), _ProcessWriteStream_streamWriter = /* @__PURE__ */ new WeakMap(), _ProcessWriteStream_closed = /* @__PURE__ */ new WeakMap();
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/shutdown.js
var require_shutdown = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/shutdown.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shutdown = void 0;
    var net_1 = require("net");
    var shutdown = async function shutdown2(rid) {
      await new Promise((resolve4) => new net_1.Socket({ fd: rid }).end(resolve4));
    };
    exports.shutdown = shutdown;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/statSync.js
var require_statSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/statSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.statSync = void 0;
    var fs = __importStar(require("fs"));
    var stat_js_1 = require_stat();
    var statSync = (path3) => (0, stat_js_1.denoifyFileInfo)(fs.statSync(path3));
    exports.statSync = statSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlink.js
var require_symlink = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlink.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.symlink = void 0;
    var fs = __importStar(require("fs/promises"));
    var symlink = async (oldpath, newpath, options) => await fs.symlink(oldpath, newpath, options === null || options === void 0 ? void 0 : options.type);
    exports.symlink = symlink;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlinkSync.js
var require_symlinkSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/symlinkSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.symlinkSync = void 0;
    var fs = __importStar(require("fs"));
    var symlinkSync = (oldpath, newpath, options) => fs.symlinkSync(oldpath, newpath, options === null || options === void 0 ? void 0 : options.type);
    exports.symlinkSync = symlinkSync;
  }
});

// npm/node_modules/@deno/shim-deno-test/dist/definitions.js
var require_definitions = __commonJS({
  "npm/node_modules/@deno/shim-deno-test/dist/definitions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.testDefinitions = void 0;
    exports.testDefinitions = [];
  }
});

// npm/node_modules/@deno/shim-deno-test/dist/test.js
var require_test = __commonJS({
  "npm/node_modules/@deno/shim-deno-test/dist/test.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test = void 0;
    var definitions_js_1 = require_definitions();
    var test = function test2() {
      var _a, _b;
      let testDef;
      const firstArg = arguments[0];
      const secondArg = arguments[1];
      const thirdArg = arguments[2];
      if (typeof firstArg === "string") {
        if (typeof secondArg === "object") {
          if (typeof thirdArg === "function") {
            if (secondArg.fn != null) {
              throw new TypeError("Unexpected 'fn' field in options, test function is already provided as the third argument.");
            }
          }
          if (secondArg.name != null) {
            throw new TypeError("Unexpected 'name' field in options, test name is already provided as the first argument.");
          }
          testDef = { name: firstArg, fn: thirdArg, ...secondArg };
        } else {
          testDef = { name: firstArg, fn: secondArg };
        }
      } else if (firstArg instanceof Function) {
        if (firstArg.name.length === 0) {
          throw new TypeError("The test function must have a name");
        }
        testDef = { fn: firstArg, name: firstArg.name };
        if (secondArg != null) {
          throw new TypeError("Unexpected second argument to Deno.test()");
        }
      } else if (typeof firstArg === "object") {
        testDef = { ...firstArg };
        if (typeof secondArg === "function") {
          testDef.fn = secondArg;
          if (firstArg.fn != null) {
            throw new TypeError("Unexpected 'fn' field in options, test function is already provided as the second argument.");
          }
          if (testDef.name == null) {
            if (secondArg.name.length === 0) {
              throw new TypeError("The test function must have a name");
            }
            testDef.name = secondArg.name;
          }
        } else {
          if (typeof firstArg.fn !== "function") {
            throw new TypeError("Expected 'fn' field in the first argument to be a test function.");
          }
        }
      } else {
        throw new TypeError("Unknown test overload");
      }
      if (typeof testDef.fn !== "function") {
        throw new TypeError("Missing test function");
      }
      if (((_b = (_a = testDef.name) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) === 0) {
        throw new TypeError("The test name can't be empty");
      }
      definitions_js_1.testDefinitions.push(testDef);
    };
    exports.test = test;
  }
});

// npm/node_modules/@deno/shim-deno-test/dist/index.js
var require_dist = __commonJS({
  "npm/node_modules/@deno/shim-deno-test/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.testDefinitions = exports.Deno = void 0;
    exports.Deno = require_test();
    __exportStar(require_test(), exports);
    var definitions_js_1 = require_definitions();
    Object.defineProperty(exports, "testDefinitions", { enumerable: true, get: function() {
      return definitions_js_1.testDefinitions;
    } });
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/test.js
var require_test2 = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/test.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.test = void 0;
    var shim_deno_test_1 = require_dist();
    Object.defineProperty(exports, "test", { enumerable: true, get: function() {
      return shim_deno_test_1.test;
    } });
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncate.js
var require_truncate = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncate.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.truncate = void 0;
    var fs = __importStar(require("fs/promises"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var truncate = async (name, len) => {
      try {
        return await fs.truncate(name, len);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new variables_js_1.errors.NotFound(`No such file or directory (os error 2), truncate '${name}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.truncate = truncate;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncateSync.js
var require_truncateSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/truncateSync.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.truncateSync = void 0;
    var fs = __importStar(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var truncateSync = (name, len) => {
      try {
        return fs.truncateSync(name, len);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new variables_js_1.errors.NotFound(`No such file or directory (os error 2), truncate '${name}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.truncateSync = truncateSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/uid.js
var require_uid = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/uid.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uid = void 0;
    var process_1 = __importDefault(require("process"));
    exports.uid = process_1.default.getuid;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/internal/iterutil.js
var require_iterutil = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/internal/iterutil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = exports.mapAsync = exports.map = void 0;
    function* map(iter, f) {
      for (const i of iter) {
        yield f(i);
      }
    }
    exports.map = map;
    async function* mapAsync(iter, f) {
      for await (const i of iter) {
        yield f(i);
      }
    }
    exports.mapAsync = mapAsync;
    async function* merge(iterables) {
      const racers = new Map(map(map(iterables, (iter) => iter[Symbol.asyncIterator]()), (iter) => [iter, iter.next()]));
      while (racers.size > 0) {
        const winner = await Promise.race(map(racers.entries(), ([iter, prom]) => prom.then((result) => ({ result, iter }))));
        if (winner.result.done) {
          racers.delete(winner.iter);
        } else {
          yield await winner.result.value;
          racers.set(winner.iter, winner.iter.next());
        }
      }
    }
    exports.merge = merge;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/watchFs.js
var require_watchFs = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/watchFs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.watchFs = void 0;
    var promises_1 = require("fs/promises");
    var path_1 = require("path");
    var iterutil_js_1 = require_iterutil();
    var watchFs = function watchFs2(paths, options = { recursive: true }) {
      paths = Array.isArray(paths) ? paths : [paths];
      const ac = new AbortController();
      const { signal } = ac;
      const rid = -1;
      const masterWatcher = (0, iterutil_js_1.merge)(paths.map((path3) => (0, iterutil_js_1.mapAsync)((0, promises_1.watch)(path3, { recursive: options === null || options === void 0 ? void 0 : options.recursive, signal }), (info) => ({
        kind: "modify",
        paths: [(0, path_1.resolve)(path3, info.filename)]
      }))));
      function close() {
        ac.abort();
      }
      return Object.assign(masterWatcher, { rid, close });
    };
    exports.watchFs = watchFs;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFile.js
var require_writeFile = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFile.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeFile = void 0;
    var fs = __importStar(require("fs/promises"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var fs_flags_js_1 = require_fs_flags();
    var writeFile = async function writeFile2(path3, data, { append = false, create = true, createNew = false, mode, signal } = {}) {
      const truncate = create && !append;
      const flag = (0, fs_flags_js_1.getFsFlag)({ append, create, createNew, truncate, write: true });
      try {
        await fs.writeFile(path3, data, { flag, signal });
        if (mode != null)
          await fs.chmod(path3, mode);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.writeFile = writeFile;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFileSync.js
var require_writeFileSync = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions/writeFileSync.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.writeFileSync = void 0;
    var os_1 = require("os");
    var openSync_js_1 = require_openSync();
    var errorMap_js_1 = __importDefault(require_errorMap());
    var statSync_js_1 = require_statSync();
    var chmodSync_js_1 = require_chmodSync();
    var writeFileSync = function writeFileSync2(path3, data, options = {}) {
      try {
        if (options.create !== void 0) {
          const create = !!options.create;
          if (!create) {
            (0, statSync_js_1.statSync)(path3);
          }
        }
        const openOptions = {
          write: true,
          create: true,
          createNew: options.createNew,
          append: !!options.append,
          truncate: !options.append
        };
        const file = (0, openSync_js_1.openSync)(path3, openOptions);
        if (options.mode !== void 0 && options.mode !== null && (0, os_1.platform)() !== "win32") {
          (0, chmodSync_js_1.chmodSync)(path3, options.mode);
        }
        let nwritten = 0;
        while (nwritten < data.length) {
          nwritten += file.writeSync(data.subarray(nwritten));
        }
        file.close();
      } catch (e) {
        throw (0, errorMap_js_1.default)(e);
      }
    };
    exports.writeFileSync = writeFileSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/args.js
var require_args = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/variables/args.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.args = void 0;
    exports.args = process.argv.slice(2);
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/functions.js
var require_functions = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/functions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.readDir = exports.read = exports.osUptime = exports.osRelease = exports.openSync = exports.open = exports.mkdirSync = exports.mkdir = exports.memoryUsage = exports.makeTempFileSync = exports.makeTempFile = exports.makeTempDirSync = exports.makeTempDir = exports.lstatSync = exports.lstat = exports.loadavg = exports.listenTls = exports.listen = exports.linkSync = exports.link = exports.kill = exports.inspect = exports.hostname = exports.gid = exports.ftruncateSync = exports.ftruncate = exports.fsyncSync = exports.fsync = exports.fstatSync = exports.fstat = exports.fdatasyncSync = exports.fdatasync = exports.exit = exports.execPath = exports.cwd = exports.createSync = exports.create = exports.copyFileSync = exports.copyFile = exports.copy = exports.connectTls = exports.connect = exports.close = exports.chownSync = exports.chown = exports.chmodSync = exports.chmod = exports.chdir = exports.addSignalListener = exports.isatty = void 0;
    exports.args = exports.writeTextFileSync = exports.writeTextFile = exports.writeSync = exports.writeFileSync = exports.writeFile = exports.write = exports.watchFs = exports.uid = exports.truncateSync = exports.truncate = exports.test = exports.symlinkSync = exports.symlink = exports.statSync = exports.stat = exports.shutdown = exports.run = exports.Process = exports.resolveDns = exports.renameSync = exports.rename = exports.removeSync = exports.removeSignalListener = exports.remove = exports.realPathSync = exports.realPath = exports.readTextFileSync = exports.readTextFile = exports.readSync = exports.readLinkSync = exports.readLink = exports.readFileSync = exports.readFile = exports.readDirSync = void 0;
    var tty_1 = require("tty");
    Object.defineProperty(exports, "isatty", { enumerable: true, get: function() {
      return tty_1.isatty;
    } });
    var addSignalListener_js_1 = require_addSignalListener();
    Object.defineProperty(exports, "addSignalListener", { enumerable: true, get: function() {
      return addSignalListener_js_1.addSignalListener;
    } });
    var chdir_js_1 = require_chdir();
    Object.defineProperty(exports, "chdir", { enumerable: true, get: function() {
      return chdir_js_1.chdir;
    } });
    var chmod_js_1 = require_chmod();
    Object.defineProperty(exports, "chmod", { enumerable: true, get: function() {
      return chmod_js_1.chmod;
    } });
    var chmodSync_js_1 = require_chmodSync();
    Object.defineProperty(exports, "chmodSync", { enumerable: true, get: function() {
      return chmodSync_js_1.chmodSync;
    } });
    var chown_js_1 = require_chown();
    Object.defineProperty(exports, "chown", { enumerable: true, get: function() {
      return chown_js_1.chown;
    } });
    var chownSync_js_1 = require_chownSync();
    Object.defineProperty(exports, "chownSync", { enumerable: true, get: function() {
      return chownSync_js_1.chownSync;
    } });
    var close_js_1 = require_close();
    Object.defineProperty(exports, "close", { enumerable: true, get: function() {
      return close_js_1.close;
    } });
    var connect_js_1 = require_connect();
    Object.defineProperty(exports, "connect", { enumerable: true, get: function() {
      return connect_js_1.connect;
    } });
    var connectTls_js_1 = require_connectTls();
    Object.defineProperty(exports, "connectTls", { enumerable: true, get: function() {
      return connectTls_js_1.connectTls;
    } });
    var copy_js_1 = require_copy();
    Object.defineProperty(exports, "copy", { enumerable: true, get: function() {
      return copy_js_1.copy;
    } });
    var copyFile_js_1 = require_copyFile();
    Object.defineProperty(exports, "copyFile", { enumerable: true, get: function() {
      return copyFile_js_1.copyFile;
    } });
    var copyFileSync_js_1 = require_copyFileSync();
    Object.defineProperty(exports, "copyFileSync", { enumerable: true, get: function() {
      return copyFileSync_js_1.copyFileSync;
    } });
    var create_js_1 = require_create();
    Object.defineProperty(exports, "create", { enumerable: true, get: function() {
      return create_js_1.create;
    } });
    var createSync_js_1 = require_createSync();
    Object.defineProperty(exports, "createSync", { enumerable: true, get: function() {
      return createSync_js_1.createSync;
    } });
    var cwd_js_1 = require_cwd();
    Object.defineProperty(exports, "cwd", { enumerable: true, get: function() {
      return cwd_js_1.cwd;
    } });
    var execPath_js_1 = require_execPath();
    Object.defineProperty(exports, "execPath", { enumerable: true, get: function() {
      return execPath_js_1.execPath;
    } });
    var exit_js_1 = require_exit();
    Object.defineProperty(exports, "exit", { enumerable: true, get: function() {
      return exit_js_1.exit;
    } });
    var fdatasync_js_1 = require_fdatasync();
    Object.defineProperty(exports, "fdatasync", { enumerable: true, get: function() {
      return fdatasync_js_1.fdatasync;
    } });
    var fdatasyncSync_js_1 = require_fdatasyncSync();
    Object.defineProperty(exports, "fdatasyncSync", { enumerable: true, get: function() {
      return fdatasyncSync_js_1.fdatasyncSync;
    } });
    var fstat_js_1 = require_fstat();
    Object.defineProperty(exports, "fstat", { enumerable: true, get: function() {
      return fstat_js_1.fstat;
    } });
    var fstatSync_js_1 = require_fstatSync();
    Object.defineProperty(exports, "fstatSync", { enumerable: true, get: function() {
      return fstatSync_js_1.fstatSync;
    } });
    var fsync_js_1 = require_fsync();
    Object.defineProperty(exports, "fsync", { enumerable: true, get: function() {
      return fsync_js_1.fsync;
    } });
    var fsyncSync_js_1 = require_fsyncSync();
    Object.defineProperty(exports, "fsyncSync", { enumerable: true, get: function() {
      return fsyncSync_js_1.fsyncSync;
    } });
    var ftruncate_js_1 = require_ftruncate();
    Object.defineProperty(exports, "ftruncate", { enumerable: true, get: function() {
      return ftruncate_js_1.ftruncate;
    } });
    var ftruncateSync_js_1 = require_ftruncateSync();
    Object.defineProperty(exports, "ftruncateSync", { enumerable: true, get: function() {
      return ftruncateSync_js_1.ftruncateSync;
    } });
    var gid_js_1 = require_gid();
    Object.defineProperty(exports, "gid", { enumerable: true, get: function() {
      return gid_js_1.gid;
    } });
    var hostname_js_1 = require_hostname();
    Object.defineProperty(exports, "hostname", { enumerable: true, get: function() {
      return hostname_js_1.hostname;
    } });
    var inspect_js_1 = require_inspect();
    Object.defineProperty(exports, "inspect", { enumerable: true, get: function() {
      return inspect_js_1.inspect;
    } });
    var kill_js_1 = require_kill();
    Object.defineProperty(exports, "kill", { enumerable: true, get: function() {
      return kill_js_1.kill;
    } });
    var link_js_1 = require_link();
    Object.defineProperty(exports, "link", { enumerable: true, get: function() {
      return link_js_1.link;
    } });
    var linkSync_js_1 = require_linkSync();
    Object.defineProperty(exports, "linkSync", { enumerable: true, get: function() {
      return linkSync_js_1.linkSync;
    } });
    var listen_js_1 = require_listen();
    Object.defineProperty(exports, "listen", { enumerable: true, get: function() {
      return listen_js_1.listen;
    } });
    var listenTls_js_1 = require_listenTls();
    Object.defineProperty(exports, "listenTls", { enumerable: true, get: function() {
      return listenTls_js_1.listenTls;
    } });
    var loadavg_js_1 = require_loadavg();
    Object.defineProperty(exports, "loadavg", { enumerable: true, get: function() {
      return loadavg_js_1.loadavg;
    } });
    var lstat_js_1 = require_lstat();
    Object.defineProperty(exports, "lstat", { enumerable: true, get: function() {
      return lstat_js_1.lstat;
    } });
    var lstatSync_js_1 = require_lstatSync();
    Object.defineProperty(exports, "lstatSync", { enumerable: true, get: function() {
      return lstatSync_js_1.lstatSync;
    } });
    var makeTempDir_js_1 = require_makeTempDir();
    Object.defineProperty(exports, "makeTempDir", { enumerable: true, get: function() {
      return makeTempDir_js_1.makeTempDir;
    } });
    var makeTempDirSync_js_1 = require_makeTempDirSync();
    Object.defineProperty(exports, "makeTempDirSync", { enumerable: true, get: function() {
      return makeTempDirSync_js_1.makeTempDirSync;
    } });
    var makeTempFile_js_1 = require_makeTempFile();
    Object.defineProperty(exports, "makeTempFile", { enumerable: true, get: function() {
      return makeTempFile_js_1.makeTempFile;
    } });
    var makeTempFileSync_js_1 = require_makeTempFileSync();
    Object.defineProperty(exports, "makeTempFileSync", { enumerable: true, get: function() {
      return makeTempFileSync_js_1.makeTempFileSync;
    } });
    var memoryUsage_js_1 = require_memoryUsage();
    Object.defineProperty(exports, "memoryUsage", { enumerable: true, get: function() {
      return memoryUsage_js_1.memoryUsage;
    } });
    var mkdir_js_1 = require_mkdir();
    Object.defineProperty(exports, "mkdir", { enumerable: true, get: function() {
      return mkdir_js_1.mkdir;
    } });
    var mkdirSync_js_1 = require_mkdirSync();
    Object.defineProperty(exports, "mkdirSync", { enumerable: true, get: function() {
      return mkdirSync_js_1.mkdirSync;
    } });
    var open_js_1 = require_open();
    Object.defineProperty(exports, "open", { enumerable: true, get: function() {
      return open_js_1.open;
    } });
    var openSync_js_1 = require_openSync();
    Object.defineProperty(exports, "openSync", { enumerable: true, get: function() {
      return openSync_js_1.openSync;
    } });
    var osRelease_js_1 = require_osRelease();
    Object.defineProperty(exports, "osRelease", { enumerable: true, get: function() {
      return osRelease_js_1.osRelease;
    } });
    var osUptime_js_1 = require_osUptime();
    Object.defineProperty(exports, "osUptime", { enumerable: true, get: function() {
      return osUptime_js_1.osUptime;
    } });
    var read_js_1 = require_read();
    Object.defineProperty(exports, "read", { enumerable: true, get: function() {
      return read_js_1.read;
    } });
    var readDir_js_1 = require_readDir();
    Object.defineProperty(exports, "readDir", { enumerable: true, get: function() {
      return readDir_js_1.readDir;
    } });
    var readDirSync_js_1 = require_readDirSync();
    Object.defineProperty(exports, "readDirSync", { enumerable: true, get: function() {
      return readDirSync_js_1.readDirSync;
    } });
    var readFile_js_1 = require_readFile();
    Object.defineProperty(exports, "readFile", { enumerable: true, get: function() {
      return readFile_js_1.readFile;
    } });
    var readFileSync_js_1 = require_readFileSync();
    Object.defineProperty(exports, "readFileSync", { enumerable: true, get: function() {
      return readFileSync_js_1.readFileSync;
    } });
    var readLink_js_1 = require_readLink();
    Object.defineProperty(exports, "readLink", { enumerable: true, get: function() {
      return readLink_js_1.readLink;
    } });
    var readLinkSync_js_1 = require_readLinkSync();
    Object.defineProperty(exports, "readLinkSync", { enumerable: true, get: function() {
      return readLinkSync_js_1.readLinkSync;
    } });
    var readSync_js_1 = require_readSync();
    Object.defineProperty(exports, "readSync", { enumerable: true, get: function() {
      return readSync_js_1.readSync;
    } });
    var readTextFile_js_1 = require_readTextFile();
    Object.defineProperty(exports, "readTextFile", { enumerable: true, get: function() {
      return readTextFile_js_1.readTextFile;
    } });
    var readTextFileSync_js_1 = require_readTextFileSync();
    Object.defineProperty(exports, "readTextFileSync", { enumerable: true, get: function() {
      return readTextFileSync_js_1.readTextFileSync;
    } });
    var realPath_js_1 = require_realPath();
    Object.defineProperty(exports, "realPath", { enumerable: true, get: function() {
      return realPath_js_1.realPath;
    } });
    var realPathSync_js_1 = require_realPathSync();
    Object.defineProperty(exports, "realPathSync", { enumerable: true, get: function() {
      return realPathSync_js_1.realPathSync;
    } });
    var remove_js_1 = require_remove();
    Object.defineProperty(exports, "remove", { enumerable: true, get: function() {
      return remove_js_1.remove;
    } });
    var removeSignalListener_js_1 = require_removeSignalListener();
    Object.defineProperty(exports, "removeSignalListener", { enumerable: true, get: function() {
      return removeSignalListener_js_1.removeSignalListener;
    } });
    var removeSync_js_1 = require_removeSync();
    Object.defineProperty(exports, "removeSync", { enumerable: true, get: function() {
      return removeSync_js_1.removeSync;
    } });
    var rename_js_1 = require_rename();
    Object.defineProperty(exports, "rename", { enumerable: true, get: function() {
      return rename_js_1.rename;
    } });
    var renameSync_js_1 = require_renameSync();
    Object.defineProperty(exports, "renameSync", { enumerable: true, get: function() {
      return renameSync_js_1.renameSync;
    } });
    var resolveDns_js_1 = require_resolveDns();
    Object.defineProperty(exports, "resolveDns", { enumerable: true, get: function() {
      return resolveDns_js_1.resolveDns;
    } });
    var run_js_1 = require_run();
    Object.defineProperty(exports, "Process", { enumerable: true, get: function() {
      return run_js_1.Process;
    } });
    Object.defineProperty(exports, "run", { enumerable: true, get: function() {
      return run_js_1.run;
    } });
    var shutdown_js_1 = require_shutdown();
    Object.defineProperty(exports, "shutdown", { enumerable: true, get: function() {
      return shutdown_js_1.shutdown;
    } });
    var stat_js_1 = require_stat();
    Object.defineProperty(exports, "stat", { enumerable: true, get: function() {
      return stat_js_1.stat;
    } });
    var statSync_js_1 = require_statSync();
    Object.defineProperty(exports, "statSync", { enumerable: true, get: function() {
      return statSync_js_1.statSync;
    } });
    var symlink_js_1 = require_symlink();
    Object.defineProperty(exports, "symlink", { enumerable: true, get: function() {
      return symlink_js_1.symlink;
    } });
    var symlinkSync_js_1 = require_symlinkSync();
    Object.defineProperty(exports, "symlinkSync", { enumerable: true, get: function() {
      return symlinkSync_js_1.symlinkSync;
    } });
    var test_js_1 = require_test2();
    Object.defineProperty(exports, "test", { enumerable: true, get: function() {
      return test_js_1.test;
    } });
    var truncate_js_1 = require_truncate();
    Object.defineProperty(exports, "truncate", { enumerable: true, get: function() {
      return truncate_js_1.truncate;
    } });
    var truncateSync_js_1 = require_truncateSync();
    Object.defineProperty(exports, "truncateSync", { enumerable: true, get: function() {
      return truncateSync_js_1.truncateSync;
    } });
    var uid_js_1 = require_uid();
    Object.defineProperty(exports, "uid", { enumerable: true, get: function() {
      return uid_js_1.uid;
    } });
    var watchFs_js_1 = require_watchFs();
    Object.defineProperty(exports, "watchFs", { enumerable: true, get: function() {
      return watchFs_js_1.watchFs;
    } });
    var write_js_1 = require_write();
    Object.defineProperty(exports, "write", { enumerable: true, get: function() {
      return write_js_1.write;
    } });
    var writeFile_js_1 = require_writeFile();
    Object.defineProperty(exports, "writeFile", { enumerable: true, get: function() {
      return writeFile_js_1.writeFile;
    } });
    var writeFileSync_js_1 = require_writeFileSync();
    Object.defineProperty(exports, "writeFileSync", { enumerable: true, get: function() {
      return writeFileSync_js_1.writeFileSync;
    } });
    var writeSync_js_1 = require_writeSync();
    Object.defineProperty(exports, "writeSync", { enumerable: true, get: function() {
      return writeSync_js_1.writeSync;
    } });
    var writeTextFile_js_1 = require_writeTextFile();
    Object.defineProperty(exports, "writeTextFile", { enumerable: true, get: function() {
      return writeTextFile_js_1.writeTextFile;
    } });
    var writeTextFileSync_js_1 = require_writeTextFileSync();
    Object.defineProperty(exports, "writeTextFileSync", { enumerable: true, get: function() {
      return writeTextFileSync_js_1.writeTextFileSync;
    } });
    var args_js_1 = require_args();
    Object.defineProperty(exports, "args", { enumerable: true, get: function() {
      return args_js_1.args;
    } });
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/types.js
var require_types = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/stable/main.js
var require_main = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/stable/main.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_classes(), exports);
    __exportStar(require_enums(), exports);
    __exportStar(require_functions(), exports);
    __exportStar(require_types(), exports);
    __exportStar(require_variables(), exports);
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno/unstable/main.js
var require_main2 = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno/unstable/main.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.utimeSync = exports.utime = exports.futimeSync = exports.futime = void 0;
    var fs_1 = __importDefault(require("fs"));
    var errorMap_js_1 = __importDefault(require_errorMap());
    var variables_js_1 = require_variables();
    var futime = async function(rid, atime, mtime) {
      try {
        await new Promise((resolve4, reject) => {
          fs_1.default.futimes(rid, atime, mtime, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve4();
            }
          });
        });
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.futime = futime;
    var futimeSync = function(rid, atime, mtime) {
      try {
        fs_1.default.futimesSync(rid, atime, mtime);
      } catch (error) {
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.futimeSync = futimeSync;
    var utime = async function(path3, atime, mtime) {
      try {
        await fs_1.default.promises.utimes(path3, atime, mtime);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new variables_js_1.errors.NotFound(`No such file or directory (os error 2), utime '${path3}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.utime = utime;
    var utimeSync = function(path3, atime, mtime) {
      try {
        fs_1.default.utimesSync(path3, atime, mtime);
      } catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ENOENT") {
          throw new variables_js_1.errors.NotFound(`No such file or directory (os error 2), utime '${path3}'`);
        }
        throw (0, errorMap_js_1.default)(error);
      }
    };
    exports.utimeSync = utimeSync;
  }
});

// npm/node_modules/@deno/shim-deno/dist/deno.js
var require_deno = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/deno.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_main(), exports);
    __exportStar(require_main2(), exports);
  }
});

// npm/node_modules/@deno/shim-deno/dist/index.js
var require_dist2 = __commonJS({
  "npm/node_modules/@deno/shim-deno/dist/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Deno = void 0;
    exports.Deno = __importStar(require_deno());
  }
});

// npm/src/os.ts
var os_exports = {};
__export(os_exports, {
  ConvertArchitectures: () => ConvertArchitectures,
  getInstalledXcodeVersions: () => getInstalledXcodeVersions,
  getMacOSVersion: () => getMacOSVersion,
  getSymbolicXcodeVersion: () => getSymbolicXcodeVersion
});
module.exports = __toCommonJS(os_exports);

// npm/src/_dnt.shims.ts
var import_shim_deno = __toESM(require_dist2());
var import_shim_deno2 = __toESM(require_dist2());
var dntGlobals = {
  Deno: import_shim_deno.Deno
};
var dntGlobalThis = createMergeProxy(globalThis, dntGlobals);
function createMergeProxy(baseObj, extObj) {
  return new Proxy(baseObj, {
    get(_target, prop, _receiver) {
      if (prop in extObj) {
        return extObj[prop];
      } else {
        return baseObj[prop];
      }
    },
    set(_target, prop, value) {
      if (prop in extObj) {
        delete extObj[prop];
      }
      baseObj[prop] = value;
      return true;
    },
    deleteProperty(_target, prop) {
      let success = false;
      if (prop in extObj) {
        delete extObj[prop];
        success = true;
      }
      if (prop in baseObj) {
        delete baseObj[prop];
        success = true;
      }
      return success;
    },
    ownKeys(_target) {
      const baseKeys = Reflect.ownKeys(baseObj);
      const extKeys = Reflect.ownKeys(extObj);
      const extKeysSet = new Set(extKeys);
      return [...baseKeys.filter((k) => !extKeysSet.has(k)), ...extKeys];
    },
    defineProperty(_target, prop, desc) {
      if (prop in extObj) {
        delete extObj[prop];
      }
      Reflect.defineProperty(baseObj, prop, desc);
      return true;
    },
    getOwnPropertyDescriptor(_target, prop) {
      if (prop in extObj) {
        return Reflect.getOwnPropertyDescriptor(extObj, prop);
      } else {
        return Reflect.getOwnPropertyDescriptor(baseObj, prop);
      }
    },
    has(_target, prop) {
      return prop in extObj || prop in baseObj;
    }
  });
}

// npm/src/deps/deno.land/std@0.182.0/_util/os.ts
var osType = (() => {
  const { Deno: Deno3 } = dntGlobalThis;
  if (typeof Deno3?.build?.os === "string") {
    return Deno3.build.os;
  }
  const { navigator } = dntGlobalThis;
  if (navigator?.appVersion?.includes?.("Win")) {
    return "windows";
  }
  return "linux";
})();
var isWindows = osType === "windows";

// npm/src/deps/deno.land/std@0.182.0/path/win32.ts
var win32_exports = {};
__export(win32_exports, {
  basename: () => basename,
  delimiter: () => delimiter,
  dirname: () => dirname,
  extname: () => extname,
  format: () => format,
  fromFileUrl: () => fromFileUrl,
  isAbsolute: () => isAbsolute,
  join: () => join,
  normalize: () => normalize,
  parse: () => parse,
  relative: () => relative,
  resolve: () => resolve,
  sep: () => sep,
  toFileUrl: () => toFileUrl,
  toNamespacedPath: () => toNamespacedPath
});

// npm/src/deps/deno.land/std@0.182.0/path/_constants.ts
var CHAR_UPPERCASE_A = 65;
var CHAR_LOWERCASE_A = 97;
var CHAR_UPPERCASE_Z = 90;
var CHAR_LOWERCASE_Z = 122;
var CHAR_DOT = 46;
var CHAR_FORWARD_SLASH = 47;
var CHAR_BACKWARD_SLASH = 92;
var CHAR_COLON = 58;
var CHAR_QUESTION_MARK = 63;

// npm/src/deps/deno.land/std@0.182.0/path/_util.ts
function assertPath(path3) {
  if (typeof path3 !== "string") {
    throw new TypeError(
      `Path must be a string. Received ${JSON.stringify(path3)}`
    );
  }
}
function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH;
}
function isPathSeparator(code) {
  return isPosixPathSeparator(code) || code === CHAR_BACKWARD_SLASH;
}
function isWindowsDeviceRoot(code) {
  return code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z || code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z;
}
function normalizeString(path3, allowAboveRoot, separator, isPathSeparator2) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code;
  for (let i = 0, len = path3.length; i <= len; ++i) {
    if (i < len)
      code = path3.charCodeAt(i);
    else if (isPathSeparator2(code))
      break;
    else
      code = CHAR_FORWARD_SLASH;
    if (isPathSeparator2(code)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += `${separator}..`;
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += separator + path3.slice(lastSlash + 1, i);
        else
          res = path3.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function _format(sep4, pathObject) {
  const dir = pathObject.dir || pathObject.root;
  const base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir)
    return base;
  if (base === sep4)
    return dir;
  if (dir === pathObject.root)
    return dir + base;
  return dir + sep4 + base;
}
var WHITESPACE_ENCODINGS = {
  "	": "%09",
  "\n": "%0A",
  "\v": "%0B",
  "\f": "%0C",
  "\r": "%0D",
  " ": "%20"
};
function encodeWhitespace(string) {
  return string.replaceAll(/[\s]/g, (c) => {
    return WHITESPACE_ENCODINGS[c] ?? c;
  });
}
function lastPathSegment(path3, isSep, start = 0) {
  let matchedNonSeparator = false;
  let end = path3.length;
  for (let i = path3.length - 1; i >= start; --i) {
    if (isSep(path3.charCodeAt(i))) {
      if (matchedNonSeparator) {
        start = i + 1;
        break;
      }
    } else if (!matchedNonSeparator) {
      matchedNonSeparator = true;
      end = i + 1;
    }
  }
  return path3.slice(start, end);
}
function stripTrailingSeparators(segment, isSep) {
  if (segment.length <= 1) {
    return segment;
  }
  let end = segment.length;
  for (let i = segment.length - 1; i > 0; i--) {
    if (isSep(segment.charCodeAt(i))) {
      end = i;
    } else {
      break;
    }
  }
  return segment.slice(0, end);
}
function stripSuffix(name, suffix) {
  if (suffix.length >= name.length) {
    return name;
  }
  const lenDiff = name.length - suffix.length;
  for (let i = suffix.length - 1; i >= 0; --i) {
    if (name.charCodeAt(lenDiff + i) !== suffix.charCodeAt(i)) {
      return name;
    }
  }
  return name.slice(0, -suffix.length);
}

// npm/src/deps/deno.land/std@0.182.0/_util/asserts.ts
var DenoStdInternalError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "DenoStdInternalError";
  }
};
function assert(expr, msg = "") {
  if (!expr) {
    throw new DenoStdInternalError(msg);
  }
}

// npm/src/deps/deno.land/std@0.182.0/path/win32.ts
var sep = "\\";
var delimiter = ";";
function resolve(...pathSegments) {
  let resolvedDevice = "";
  let resolvedTail = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1; i--) {
    let path3;
    const { Deno: Deno3 } = dntGlobalThis;
    if (i >= 0) {
      path3 = pathSegments[i];
    } else if (!resolvedDevice) {
      if (typeof Deno3?.cwd !== "function") {
        throw new TypeError("Resolved a drive-letter-less path without a CWD.");
      }
      path3 = Deno3.cwd();
    } else {
      if (typeof Deno3?.env?.get !== "function" || typeof Deno3?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path3 = Deno3.cwd();
      if (path3 === void 0 || path3.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
        path3 = `${resolvedDevice}\\`;
      }
    }
    assertPath(path3);
    const len = path3.length;
    if (len === 0)
      continue;
    let rootEnd = 0;
    let device = "";
    let isAbsolute4 = false;
    const code = path3.charCodeAt(0);
    if (len > 1) {
      if (isPathSeparator(code)) {
        isAbsolute4 = true;
        if (isPathSeparator(path3.charCodeAt(1))) {
          let j = 2;
          let last = j;
          for (; j < len; ++j) {
            if (isPathSeparator(path3.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            const firstPart = path3.slice(last, j);
            last = j;
            for (; j < len; ++j) {
              if (!isPathSeparator(path3.charCodeAt(j)))
                break;
            }
            if (j < len && j !== last) {
              last = j;
              for (; j < len; ++j) {
                if (isPathSeparator(path3.charCodeAt(j)))
                  break;
              }
              if (j === len) {
                device = `\\\\${firstPart}\\${path3.slice(last)}`;
                rootEnd = j;
              } else if (j !== last) {
                device = `\\\\${firstPart}\\${path3.slice(last, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code)) {
        if (path3.charCodeAt(1) === CHAR_COLON) {
          device = path3.slice(0, 2);
          rootEnd = 2;
          if (len > 2) {
            if (isPathSeparator(path3.charCodeAt(2))) {
              isAbsolute4 = true;
              rootEnd = 3;
            }
          }
        }
      }
    } else if (isPathSeparator(code)) {
      rootEnd = 1;
      isAbsolute4 = true;
    }
    if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      continue;
    }
    if (resolvedDevice.length === 0 && device.length > 0) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = `${path3.slice(rootEnd)}\\${resolvedTail}`;
      resolvedAbsolute = isAbsolute4;
    }
    if (resolvedAbsolute && resolvedDevice.length > 0)
      break;
  }
  resolvedTail = normalizeString(
    resolvedTail,
    !resolvedAbsolute,
    "\\",
    isPathSeparator
  );
  return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
}
function normalize(path3) {
  assertPath(path3);
  const len = path3.length;
  if (len === 0)
    return ".";
  let rootEnd = 0;
  let device;
  let isAbsolute4 = false;
  const code = path3.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      isAbsolute4 = true;
      if (isPathSeparator(path3.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path3.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          const firstPart = path3.slice(last, j);
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path3.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path3.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path3.slice(last)}\\`;
            } else if (j !== last) {
              device = `\\\\${firstPart}\\${path3.slice(last, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path3.charCodeAt(1) === CHAR_COLON) {
        device = path3.slice(0, 2);
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path3.charCodeAt(2))) {
            isAbsolute4 = true;
            rootEnd = 3;
          }
        }
      }
    }
  } else if (isPathSeparator(code)) {
    return "\\";
  }
  let tail;
  if (rootEnd < len) {
    tail = normalizeString(
      path3.slice(rootEnd),
      !isAbsolute4,
      "\\",
      isPathSeparator
    );
  } else {
    tail = "";
  }
  if (tail.length === 0 && !isAbsolute4)
    tail = ".";
  if (tail.length > 0 && isPathSeparator(path3.charCodeAt(len - 1))) {
    tail += "\\";
  }
  if (device === void 0) {
    if (isAbsolute4) {
      if (tail.length > 0)
        return `\\${tail}`;
      else
        return "\\";
    } else if (tail.length > 0) {
      return tail;
    } else {
      return "";
    }
  } else if (isAbsolute4) {
    if (tail.length > 0)
      return `${device}\\${tail}`;
    else
      return `${device}\\`;
  } else if (tail.length > 0) {
    return device + tail;
  } else {
    return device;
  }
}
function isAbsolute(path3) {
  assertPath(path3);
  const len = path3.length;
  if (len === 0)
    return false;
  const code = path3.charCodeAt(0);
  if (isPathSeparator(code)) {
    return true;
  } else if (isWindowsDeviceRoot(code)) {
    if (len > 2 && path3.charCodeAt(1) === CHAR_COLON) {
      if (isPathSeparator(path3.charCodeAt(2)))
        return true;
    }
  }
  return false;
}
function join(...paths) {
  const pathsCount = paths.length;
  if (pathsCount === 0)
    return ".";
  let joined;
  let firstPart = null;
  for (let i = 0; i < pathsCount; ++i) {
    const path3 = paths[i];
    assertPath(path3);
    if (path3.length > 0) {
      if (joined === void 0)
        joined = firstPart = path3;
      else
        joined += `\\${path3}`;
    }
  }
  if (joined === void 0)
    return ".";
  let needsReplace = true;
  let slashCount = 0;
  assert(firstPart != null);
  if (isPathSeparator(firstPart.charCodeAt(0))) {
    ++slashCount;
    const firstLen = firstPart.length;
    if (firstLen > 1) {
      if (isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2)))
            ++slashCount;
          else {
            needsReplace = false;
          }
        }
      }
    }
  }
  if (needsReplace) {
    for (; slashCount < joined.length; ++slashCount) {
      if (!isPathSeparator(joined.charCodeAt(slashCount)))
        break;
    }
    if (slashCount >= 2)
      joined = `\\${joined.slice(slashCount)}`;
  }
  return normalize(joined);
}
function relative(from, to) {
  assertPath(from);
  assertPath(to);
  if (from === to)
    return "";
  const fromOrig = resolve(from);
  const toOrig = resolve(to);
  if (fromOrig === toOrig)
    return "";
  from = fromOrig.toLowerCase();
  to = toOrig.toLowerCase();
  if (from === to)
    return "";
  let fromStart = 0;
  let fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (from.charCodeAt(fromStart) !== CHAR_BACKWARD_SLASH)
      break;
  }
  for (; fromEnd - 1 > fromStart; --fromEnd) {
    if (from.charCodeAt(fromEnd - 1) !== CHAR_BACKWARD_SLASH)
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 0;
  let toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== CHAR_BACKWARD_SLASH)
      break;
  }
  for (; toEnd - 1 > toStart; --toEnd) {
    if (to.charCodeAt(toEnd - 1) !== CHAR_BACKWARD_SLASH)
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
          return toOrig.slice(toStart + i + 1);
        } else if (i === 2) {
          return toOrig.slice(toStart + i);
        }
      }
      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
          lastCommonSep = i;
        } else if (i === 2) {
          lastCommonSep = 3;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (fromCode === CHAR_BACKWARD_SLASH)
      lastCommonSep = i;
  }
  if (i !== length && lastCommonSep === -1) {
    return toOrig;
  }
  let out = "";
  if (lastCommonSep === -1)
    lastCommonSep = 0;
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
      if (out.length === 0)
        out += "..";
      else
        out += "\\..";
    }
  }
  if (out.length > 0) {
    return out + toOrig.slice(toStart + lastCommonSep, toEnd);
  } else {
    toStart += lastCommonSep;
    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH)
      ++toStart;
    return toOrig.slice(toStart, toEnd);
  }
}
function toNamespacedPath(path3) {
  if (typeof path3 !== "string")
    return path3;
  if (path3.length === 0)
    return "";
  const resolvedPath = resolve(path3);
  if (resolvedPath.length >= 3) {
    if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
      if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
        const code = resolvedPath.charCodeAt(2);
        if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
          return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
        }
      }
    } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0))) {
      if (resolvedPath.charCodeAt(1) === CHAR_COLON && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
        return `\\\\?\\${resolvedPath}`;
      }
    }
  }
  return path3;
}
function dirname(path3) {
  assertPath(path3);
  const len = path3.length;
  if (len === 0)
    return ".";
  let rootEnd = -1;
  let end = -1;
  let matchedSlash = true;
  let offset = 0;
  const code = path3.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      rootEnd = offset = 1;
      if (isPathSeparator(path3.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path3.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path3.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path3.charCodeAt(j)))
                break;
            }
            if (j === len) {
              return path3;
            }
            if (j !== last) {
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path3.charCodeAt(1) === CHAR_COLON) {
        rootEnd = offset = 2;
        if (len > 2) {
          if (isPathSeparator(path3.charCodeAt(2)))
            rootEnd = offset = 3;
        }
      }
    }
  } else if (isPathSeparator(code)) {
    return path3;
  }
  for (let i = len - 1; i >= offset; --i) {
    if (isPathSeparator(path3.charCodeAt(i))) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) {
    if (rootEnd === -1)
      return ".";
    else
      end = rootEnd;
  }
  return stripTrailingSeparators(path3.slice(0, end), isPosixPathSeparator);
}
function basename(path3, suffix = "") {
  assertPath(path3);
  if (path3.length === 0)
    return path3;
  if (typeof suffix !== "string") {
    throw new TypeError(
      `Suffix must be a string. Received ${JSON.stringify(suffix)}`
    );
  }
  let start = 0;
  if (path3.length >= 2) {
    const drive = path3.charCodeAt(0);
    if (isWindowsDeviceRoot(drive)) {
      if (path3.charCodeAt(1) === CHAR_COLON)
        start = 2;
    }
  }
  const lastSegment = lastPathSegment(path3, isPathSeparator, start);
  const strippedSegment = stripTrailingSeparators(lastSegment, isPathSeparator);
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
function extname(path3) {
  assertPath(path3);
  let start = 0;
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  if (path3.length >= 2 && path3.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path3.charCodeAt(0))) {
    start = startPart = 2;
  }
  for (let i = path3.length - 1; i >= start; --i) {
    const code = path3.charCodeAt(i);
    if (isPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path3.slice(startDot, end);
}
function format(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new TypeError(
      `The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`
    );
  }
  return _format("\\", pathObject);
}
function parse(path3) {
  assertPath(path3);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  const len = path3.length;
  if (len === 0)
    return ret;
  let rootEnd = 0;
  let code = path3.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      rootEnd = 1;
      if (isPathSeparator(path3.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path3.charCodeAt(j)))
            break;
        }
        if (j < len && j !== last) {
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path3.charCodeAt(j)))
              break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path3.charCodeAt(j)))
                break;
            }
            if (j === len) {
              rootEnd = j;
            } else if (j !== last) {
              rootEnd = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path3.charCodeAt(1) === CHAR_COLON) {
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path3.charCodeAt(2))) {
            if (len === 3) {
              ret.root = ret.dir = path3;
              ret.base = "\\";
              return ret;
            }
            rootEnd = 3;
          }
        } else {
          ret.root = ret.dir = path3;
          return ret;
        }
      }
    }
  } else if (isPathSeparator(code)) {
    ret.root = ret.dir = path3;
    ret.base = "\\";
    return ret;
  }
  if (rootEnd > 0)
    ret.root = path3.slice(0, rootEnd);
  let startDot = -1;
  let startPart = rootEnd;
  let end = -1;
  let matchedSlash = true;
  let i = path3.length - 1;
  let preDotState = 0;
  for (; i >= rootEnd; --i) {
    code = path3.charCodeAt(i);
    if (isPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      ret.base = ret.name = path3.slice(startPart, end);
    }
  } else {
    ret.name = path3.slice(startPart, startDot);
    ret.base = path3.slice(startPart, end);
    ret.ext = path3.slice(startDot, end);
  }
  ret.base = ret.base || "\\";
  if (startPart > 0 && startPart !== rootEnd) {
    ret.dir = path3.slice(0, startPart - 1);
  } else
    ret.dir = ret.root;
  return ret;
}
function fromFileUrl(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  let path3 = decodeURIComponent(
    url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  ).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  if (url.hostname != "") {
    path3 = `\\\\${url.hostname}${path3}`;
  }
  return path3;
}
function toFileUrl(path3) {
  if (!isAbsolute(path3)) {
    throw new TypeError("Must be an absolute path.");
  }
  const [, hostname, pathname] = path3.match(
    /^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/
  );
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(pathname.replace(/%/g, "%25"));
  if (hostname != null && hostname != "localhost") {
    url.hostname = hostname;
    if (!url.hostname) {
      throw new TypeError("Invalid hostname.");
    }
  }
  return url;
}

// npm/src/deps/deno.land/std@0.182.0/path/posix.ts
var posix_exports = {};
__export(posix_exports, {
  basename: () => basename2,
  delimiter: () => delimiter2,
  dirname: () => dirname2,
  extname: () => extname2,
  format: () => format2,
  fromFileUrl: () => fromFileUrl2,
  isAbsolute: () => isAbsolute2,
  join: () => join2,
  normalize: () => normalize2,
  parse: () => parse2,
  relative: () => relative2,
  resolve: () => resolve2,
  sep: () => sep2,
  toFileUrl: () => toFileUrl2,
  toNamespacedPath: () => toNamespacedPath2
});
var sep2 = "/";
var delimiter2 = ":";
function resolve2(...pathSegments) {
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    let path3;
    if (i >= 0)
      path3 = pathSegments[i];
    else {
      const { Deno: Deno3 } = dntGlobalThis;
      if (typeof Deno3?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path3 = Deno3.cwd();
    }
    assertPath(path3);
    if (path3.length === 0) {
      continue;
    }
    resolvedPath = `${path3}/${resolvedPath}`;
    resolvedAbsolute = isPosixPathSeparator(path3.charCodeAt(0));
  }
  resolvedPath = normalizeString(
    resolvedPath,
    !resolvedAbsolute,
    "/",
    isPosixPathSeparator
  );
  if (resolvedAbsolute) {
    if (resolvedPath.length > 0)
      return `/${resolvedPath}`;
    else
      return "/";
  } else if (resolvedPath.length > 0)
    return resolvedPath;
  else
    return ".";
}
function normalize2(path3) {
  assertPath(path3);
  if (path3.length === 0)
    return ".";
  const isAbsolute4 = isPosixPathSeparator(path3.charCodeAt(0));
  const trailingSeparator = isPosixPathSeparator(
    path3.charCodeAt(path3.length - 1)
  );
  path3 = normalizeString(path3, !isAbsolute4, "/", isPosixPathSeparator);
  if (path3.length === 0 && !isAbsolute4)
    path3 = ".";
  if (path3.length > 0 && trailingSeparator)
    path3 += "/";
  if (isAbsolute4)
    return `/${path3}`;
  return path3;
}
function isAbsolute2(path3) {
  assertPath(path3);
  return path3.length > 0 && isPosixPathSeparator(path3.charCodeAt(0));
}
function join2(...paths) {
  if (paths.length === 0)
    return ".";
  let joined;
  for (let i = 0, len = paths.length; i < len; ++i) {
    const path3 = paths[i];
    assertPath(path3);
    if (path3.length > 0) {
      if (!joined)
        joined = path3;
      else
        joined += `/${path3}`;
    }
  }
  if (!joined)
    return ".";
  return normalize2(joined);
}
function relative2(from, to) {
  assertPath(from);
  assertPath(to);
  if (from === to)
    return "";
  from = resolve2(from);
  to = resolve2(to);
  if (from === to)
    return "";
  let fromStart = 1;
  const fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (!isPosixPathSeparator(from.charCodeAt(fromStart)))
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 1;
  const toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (!isPosixPathSeparator(to.charCodeAt(toStart)))
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (isPosixPathSeparator(to.charCodeAt(toStart + i))) {
          return to.slice(toStart + i + 1);
        } else if (i === 0) {
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (isPosixPathSeparator(from.charCodeAt(fromStart + i))) {
          lastCommonSep = i;
        } else if (i === 0) {
          lastCommonSep = 0;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode)
      break;
    else if (isPosixPathSeparator(fromCode))
      lastCommonSep = i;
  }
  let out = "";
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || isPosixPathSeparator(from.charCodeAt(i))) {
      if (out.length === 0)
        out += "..";
      else
        out += "/..";
    }
  }
  if (out.length > 0)
    return out + to.slice(toStart + lastCommonSep);
  else {
    toStart += lastCommonSep;
    if (isPosixPathSeparator(to.charCodeAt(toStart)))
      ++toStart;
    return to.slice(toStart);
  }
}
function toNamespacedPath2(path3) {
  return path3;
}
function dirname2(path3) {
  if (path3.length === 0)
    return ".";
  let end = -1;
  let matchedNonSeparator = false;
  for (let i = path3.length - 1; i >= 1; --i) {
    if (isPosixPathSeparator(path3.charCodeAt(i))) {
      if (matchedNonSeparator) {
        end = i;
        break;
      }
    } else {
      matchedNonSeparator = true;
    }
  }
  if (end === -1) {
    return isPosixPathSeparator(path3.charCodeAt(0)) ? "/" : ".";
  }
  return stripTrailingSeparators(
    path3.slice(0, end),
    isPosixPathSeparator
  );
}
function basename2(path3, suffix = "") {
  assertPath(path3);
  if (path3.length === 0)
    return path3;
  if (typeof suffix !== "string") {
    throw new TypeError(
      `Suffix must be a string. Received ${JSON.stringify(suffix)}`
    );
  }
  const lastSegment = lastPathSegment(path3, isPosixPathSeparator);
  const strippedSegment = stripTrailingSeparators(
    lastSegment,
    isPosixPathSeparator
  );
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
function extname2(path3) {
  assertPath(path3);
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  for (let i = path3.length - 1; i >= 0; --i) {
    const code = path3.charCodeAt(i);
    if (isPosixPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path3.slice(startDot, end);
}
function format2(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new TypeError(
      `The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`
    );
  }
  return _format("/", pathObject);
}
function parse2(path3) {
  assertPath(path3);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  if (path3.length === 0)
    return ret;
  const isAbsolute4 = isPosixPathSeparator(path3.charCodeAt(0));
  let start;
  if (isAbsolute4) {
    ret.root = "/";
    start = 1;
  } else {
    start = 0;
  }
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let i = path3.length - 1;
  let preDotState = 0;
  for (; i >= start; --i) {
    const code = path3.charCodeAt(i);
    if (isPosixPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      if (startPart === 0 && isAbsolute4) {
        ret.base = ret.name = path3.slice(1, end);
      } else {
        ret.base = ret.name = path3.slice(startPart, end);
      }
    }
    ret.base = ret.base || "/";
  } else {
    if (startPart === 0 && isAbsolute4) {
      ret.name = path3.slice(1, startDot);
      ret.base = path3.slice(1, end);
    } else {
      ret.name = path3.slice(startPart, startDot);
      ret.base = path3.slice(startPart, end);
    }
    ret.ext = path3.slice(startDot, end);
  }
  if (startPart > 0) {
    ret.dir = stripTrailingSeparators(
      path3.slice(0, startPart - 1),
      isPosixPathSeparator
    );
  } else if (isAbsolute4)
    ret.dir = "/";
  return ret;
}
function fromFileUrl2(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol != "file:") {
    throw new TypeError("Must be a file URL.");
  }
  return decodeURIComponent(
    url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  );
}
function toFileUrl2(path3) {
  if (!isAbsolute2(path3)) {
    throw new TypeError("Must be an absolute path.");
  }
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(
    path3.replace(/%/g, "%25").replace(/\\/g, "%5C")
  );
  return url;
}

// npm/src/deps/deno.land/std@0.182.0/path/glob.ts
var path = isWindows ? win32_exports : posix_exports;
var { join: join3, normalize: normalize3 } = path;

// npm/src/deps/deno.land/std@0.182.0/path/mod.ts
var path2 = isWindows ? win32_exports : posix_exports;
var {
  basename: basename3,
  delimiter: delimiter3,
  dirname: dirname3,
  extname: extname3,
  format: format3,
  fromFileUrl: fromFileUrl3,
  isAbsolute: isAbsolute3,
  join: join4,
  normalize: normalize4,
  parse: parse3,
  relative: relative3,
  resolve: resolve3,
  sep: sep3,
  toFileUrl: toFileUrl3,
  toNamespacedPath: toNamespacedPath3
} = path2;

// npm/src/os.ts
var import_child_process = require("child_process");
var import_util3 = require("util");
async function getInstalledXcodeVersions() {
  const installed = [];
  for await (const entry of import_shim_deno2.Deno.readDir("/Applications")) {
    if (entry.name.startsWith("Xcode_")) {
      installed.push(getXcodeVersionFromPath(entry.name));
    }
  }
  return installed;
}
function getXcodeVersionFromPath(absPath) {
  return absPath.replace("Xcode_", "").replace(".app", "");
}
async function getSymbolicXcodeVersion() {
  const fileInfo = await import_shim_deno2.Deno.lstat("/Applications/Xcode.app");
  if (fileInfo.isSymlink === false) {
    throw new Error(
      "/Applications/Xcode.app is not symbolic link, fileinfo: " + JSON.stringify(fileInfo)
    );
  }
  const p = await import_shim_deno2.Deno.realPath("/Applications/Xcode.app");
  return getXcodeVersionFromPath(basename3(p));
}
var execAsync = (0, import_util3.promisify)(import_child_process.exec);
async function getMacOSVersion() {
  try {
    const { stdout, stderr } = await execAsync("sw_vers -productVersion");
    if (stderr) {
      throw new Error(`Failed to get macOS version: ${stderr}`);
    }
    return stdout.trim();
  } catch (error) {
    throw new Error(`Failed to get macOS version: ${error}`);
  }
}
function ConvertArchitectures(architecture) {
  switch (architecture) {
    case "x86_64": {
      return "x64";
    }
    case "x64": {
      return "x64";
    }
    case "aarch64": {
      return "arm64";
    }
    case "arm64": {
      return "arm64";
    }
    default:
      throw new Error(`Invalid architecture: ${architecture}`);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ConvertArchitectures,
  getInstalledXcodeVersions,
  getMacOSVersion,
  getSymbolicXcodeVersion
});
